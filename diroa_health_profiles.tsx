import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  Heart,
  Shield,
  ShieldCheck,
  Lock,
  Unlock,
  FileText,
  MessageSquare,
  User,
  Settings,
  Search,
  Bell,
  Sun,
  Moon,
  Plus,
  Send,
  Paperclip,
  Download,
  Upload,
  Bookmark,
  BookmarkCheck,
  Check,
  X,
  Menu,
  Phone,
  Mail,
  Share2,
  Printer,
  QrCode,
  Calendar,
  AlertCircle,
  Filter,
  Sparkles,
  Clock,
  ArrowUpRight,
  Key,
  CheckCircle2,
  Trash2,
  Edit3,
  Sliders,
  ChevronRight,
  Info,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  Pill,
  Stethoscope,
  Users,
  Award,
  Eye,
  Building2,
  BookOpen
} from 'lucide-react';

const initialPosts = [
  {
    id: 1,
    author: 'Dr. John Doe',
    title: 'Healthcare Provider',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    content: 'New clinical trial signup available! Visit us for more information and get involved in the latest medical research on preventive cardiovascular health.',
    category: 'Clinical Trials',
    badge: 'Verified Provider',
    time: '2 hours ago',
    likes: 24,
    comments: 5,
    liked: false,
    bookmarked: false
  },
  {
    id: 2,
    author: 'Health Insurance Co',
    title: 'Insurance Partner',
    avatar: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&auto=format&fit=crop&q=80',
    content: 'New health insurance rates starting this month! Check details on coverage updates, reduced prescription copays, and expanded telehealth benefits.',
    category: 'Insurance',
    badge: 'Official Update',
    time: '5 hours ago',
    likes: 18,
    comments: 2,
    liked: false,
    bookmarked: false
  },
  {
    id: 3,
    author: 'Medical Center ABC',
    title: 'Community Hospital',
    avatar: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=150&auto=format&fit=crop&q=80',
    content: 'Free health consultations available this weekend! Walk-ins welcome for annual blood pressure checks, diabetes screening, and primary wellness advice.',
    category: 'Wellness',
    badge: 'Community Event',
    time: '1 day ago',
    likes: 42,
    comments: 8,
    liked: false,
    bookmarked: true
  },
  {
    id: 4,
    author: 'Healthy Living Blog',
    title: 'Wellness Editorial',
    avatar: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=150&auto=format&fit=crop&q=80',
    content: 'Benefits of daily yoga and meditation for overall mental clarity and immune health. Small daily habits produce substantial long-term metabolic rewards.',
    category: 'Wellness',
    badge: 'Featured Article',
    time: '2 days ago',
    likes: 67,
    comments: 11,
    liked: false,
    bookmarked: false
  },
  {
    id: 5,
    author: 'Nutrition Experts',
    title: 'Clinical Dietitians',
    avatar: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=150&auto=format&fit=crop&q=80',
    content: 'Upcoming live webinar on meal planning for a balanced diet and managing inflammation through gut-healthy nutrition. Register now via Diroa Resources!',
    category: 'Webinars',
    badge: 'Live Session',
    time: '3 days ago',
    likes: 31,
    comments: 4,
    liked: false,
    bookmarked: false
  }
];

const initialContacts = [
  {
    id: 'dr-john',
    name: 'Dr. John Doe',
    role: 'Primary Care Physician',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    unread: 1,
    online: true,
    lastMsg: 'Your recent blood work summary looks very healthy. Let us discuss the details.',
    time: '10:15 AM'
  },
  {
    id: 'esteban',
    name: 'Esteban',
    role: 'Health Advocate / Co-founder',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    unread: 0,
    online: true,
    lastMsg: "It's time to have a platform that connects us digitally to our health.",
    time: 'Yesterday'
  },
  {
    id: 'nikhil',
    name: 'Nikhil',
    role: 'Health Technology Advisor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    unread: 0,
    online: false,
    lastMsg: "We're here to disrupt the legacy health system and promote taking an interest in your health.",
    time: 'Oct 22'
  },
  {
    id: 'support',
    name: 'Diroa Support Team',
    role: 'Platform Helpdesk',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    unread: 0,
    online: true,
    lastMsg: 'Welcome to Diroa Health Profiles! Your encrypted vault is active.',
    time: 'Oct 15'
  }
];

const initialMessagesMap = {
  'dr-john': [
    { id: 101, sender: 'them', text: 'Hello Sarah! I reviewed your annual metabolic panel.', time: '09:30 AM' },
    { id: 102, sender: 'me', text: 'Hi Dr. Doe! Are my cholesterol levels within the healthy target?', time: '09:45 AM' },
    { id: 103, sender: 'them', text: 'Your recent blood work summary looks very healthy. Let us discuss the details on our next routine checkup.', time: '10:15 AM' }
  ],
  'esteban': [
    { id: 201, sender: 'them', text: "It's time to have a platform that connects us digitally to our health.", time: 'Yesterday 02:30 PM' },
    { id: 202, sender: 'me', text: 'I completely agree! Having my records, doctor messages, and lab vault in one portal is revolutionary.', time: 'Yesterday 02:45 PM' }
  ],
  'nikhil': [
    { id: 301, sender: 'them', text: "We're here to disrupt the legacy health system and promote taking an interest in your health.", time: 'Oct 22 11:10 AM' },
    { id: 302, sender: 'me', text: 'Thank you Nikhil! Looking forward to testing out the new clinical trial integration features.', time: 'Oct 22 11:20 AM' }
  ],
  'support': [
    { id: 401, sender: 'them', text: 'Welcome to Diroa Health Profiles! Your encrypted vault is active.', time: 'Oct 15 10:00 AM' }
  ]
};

const initialResources = [
  {
    id: 1,
    title: 'Understanding Clinical Trials: Participant Rights & Breakthroughs',
    category: 'Clinical Research',
    readTime: '5 min read',
    date: 'Oct 2026',
    summary: 'A clear guide explaining how clinical research studies safeguard patient privacy and advance personalized therapies.',
    content: 'Clinical trials represent the bedrock of medical innovation. By participating in research, individuals gain early access to cutting-edge treatments while contributing to broad public health progress. Diroa Health streamlines trial matching by securely comparing your encrypted profile metrics with relevant study protocols.',
    bookmarked: true
  },
  {
    id: 2,
    title: 'Navigating Health Insurance Rates & Coverage in 2026',
    category: 'Insurance',
    readTime: '7 min read',
    date: 'Oct 2026',
    summary: 'Key shifts in health insurance tiers, essential benefits coverage, and tips to optimize out-of-pocket medical expenses.',
    content: 'Understanding your policy deductible, co-insurance percentages, and out-of-pocket maximums ensures you never face unexpected medical billing surprises. Store your insurance card directly in your Diroa Vault for instant verification at care centers.',
    bookmarked: false
  },
  {
    id: 3,
    title: 'Preventive Health Checkups: Recommended Screenings by Age',
    category: 'Preventive Care',
    readTime: '6 min read',
    date: 'Sep 2026',
    summary: 'Essential checklist for annual physicals, cardiovascular screening, lipid panels, and routine immunizations.',
    content: 'Proactive health oversight catches minor physiological changes long before they manifest as chronic conditions. Keep your digital profile metrics updated to automatically track long-term wellness trends.',
    bookmarked: true
  },
  {
    id: 4,
    title: 'Optimal Anti-Inflammatory Meal Planning & Micronutrients',
    category: 'Diet & Nutrition',
    readTime: '4 min read',
    date: 'Sep 2026',
    summary: 'Practical dietary recommendations based on clinical gut-biome research and metabolic wellness studies.',
    content: 'Integrating whole plant foods, omega-3 fatty acids, and fermented gut-supportive foods creates a foundation for sustained energy and cellular repair.',
    bookmarked: false
  }
];

const initialVaultFiles = [
  { id: 1, name: 'Comprehensive_Blood_Panel_Oct2026.pdf', category: 'Lab Results', size: '3.4 MB', date: 'Oct 18, 2026', tag: 'AES-256' },
  { id: 2, name: 'Annual_Flu_Vaccine_Record_2026.pdf', category: 'Immunization Records', size: '1.2 MB', date: 'Oct 05, 2026', tag: 'Verified' },
  { id: 3, name: 'Lisinopril_10mg_Prescription_Doc.pdf', category: 'Prescriptions', size: '890 KB', date: 'Sep 28, 2026', tag: 'Active Rx' },
  { id: 4, name: 'Chest_XRay_Radiology_Report.dcom', category: 'Imaging & Scans', size: '18.5 MB', date: 'Aug 14, 2026', tag: 'DICOM' },
  { id: 5, name: 'Diroa_Premier_Insurance_Card_Front_Back.pdf', category: 'Insurance Cards', size: '2.1 MB', date: 'Jul 01, 2026', tag: 'Encrypted' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Health Stats & Profile State
  const [profile, setProfile] = useState({
    name: 'Sarah Jenkins',
    age: 32,
    gender: 'Female',
    bloodType: 'O+',
    height: "5'8\"",
    weight: '142 lbs',
    primaryDoctor: 'Dr. John Doe',
    emergencyContact: 'Esteban Jenkins (+1 806-555-0192)',
    allergies: ['Penicillin', 'Peanuts (Mild)'],
    medications: [
      { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily (Morning)' },
      { name: 'Multivitamin', dosage: '1 Tablet', frequency: 'Daily with meal' }
    ],
    medicalHistory: ['Mild Seasonal Allergies', 'Asthma (Controlled)'],
    insurance: {
      provider: 'Diroa Health Care Network',
      policyNumber: 'DHC-88392019',
      groupNumber: 'GRP-99401',
      planType: 'PPO Gold Tier'
    }
  });

  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // Feed State
  const [posts, setPosts] = useState(initialPosts);
  const [feedCategory, setFeedCategory] = useState('All');
  const [newPostText, setNewPostText] = useState('');
  const [newPostCategory, setNewPostCategory] = useState('Wellness');

  // Messages State
  const [contacts, setContacts] = useState(initialContacts);
  const [activeContactId, setActiveContactId] = useState('dr-john');
  const [messagesMap, setMessagesMap] = useState(initialMessagesMap);
  const [messageInput, setMessageInput] = useState('');
  const [chatSearch, setChatSearch] = useState('');

  // Resources State
  const [resources, setResources] = useState(initialResources);
  const [resourceCategory, setResourceCategory] = useState('All');
  const [resourceSearch, setResourceSearch] = useState('');
  const [selectedResource, setSelectedResource] = useState(null);

  // Vault Security State
  const [isVaultUnlocked, setIsVaultUnlocked] = useState(false);
  const [vaultPinInput, setVaultPinInput] = useState('');
  const [vaultError, setVaultError] = useState('');
  const [vaultFiles, setVaultFiles] = useState(initialVaultFiles);
  const [vaultCategory, setVaultCategory] = useState('All');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Settings State
  const [sharingPermissions, setSharingPermissions] = useState({
    drJohn: true,
    esteban: true,
    nikhil: false,
    researchers: false
  });
  const [notificationsConfig, setNotificationsConfig] = useState({
    appointments: true,
    messages: true,
    trialAlerts: true,
    blogUpdates: false
  });

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Feed handlers
  const handleLikePost = (id) => {
    setPosts(posts.map(p => {
      if (p.id === id) {
        return {
          ...p,
          liked: !p.liked,
          likes: p.liked ? p.likes - 1 : p.likes + 1
        };
      }
      return p;
    }));
  };

  const handleBookmarkPost = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, bookmarked: !p.bookmarked } : p));
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost = {
      id: Date.now(),
      author: profile.name,
      title: 'Patient Member',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      content: newPostText,
      category: newPostCategory,
      badge: 'Community Member',
      time: 'Just now',
      likes: 0,
      comments: 0,
      liked: false,
      bookmarked: false
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
  };

  // Message handlers
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: messageInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessagesMap(prev => ({
      ...prev,
      [activeContactId]: [...(prev[activeContactId] || []), newMsg]
    }));

    setContacts(contacts.map(c => c.id === activeContactId ? { ...c, lastMsg: messageInput, time: 'Just now' } : c));
    setMessageInput('');

    // Simulated provider automated reply
    setTimeout(() => {
      const activeContact = contacts.find(c => c.id === activeContactId);
      const autoReplyText = activeContactId === 'dr-john'
        ? "Thank you for reaching out, Sarah. Your clinical note has been logged to your health timeline."
        : activeContactId === 'esteban'
        ? "Got your note! Let us keep advancing digital health connectivity."
        : "Message received by Diroa Health Portal.";

      const replyMsg = {
        id: Date.now() + 1,
        sender: 'them',
        text: autoReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessagesMap(prev => ({
        ...prev,
        [activeContactId]: [...(prev[activeContactId] || []), replyMsg]
      }));

      setContacts(prev => prev.map(c => c.id === activeContactId ? { ...c, lastMsg: autoReplyText, time: 'Just now' } : c));
    }, 1200);
  };

  // Vault Unlock Handler
  const handleVaultUnlock = (e) => {
    e.preventDefault();
    if (vaultPinInput.trim().length >= 1) {
      setIsVaultUnlocked(true);
      setVaultError('');
      setVaultPinInput('');
    } else {
      setVaultError('Please enter a passcode to unlock your encrypted medical records.');
    }
  };

  // Vault Upload Simulation
  const handleUploadVaultFile = () => {
    setIsUploading(true);
    setUploadProgress(15);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          const newFile = {
            id: Date.now(),
            name: `Uploaded_Medical_Record_${Math.floor(Math.random() * 900 + 100)}.pdf`,
            category: vaultCategory === 'All' ? 'Lab Results' : vaultCategory,
            size: '2.8 MB',
            date: 'Just now',
            tag: 'AES-256'
          };
          setVaultFiles(prevFiles => [newFile, ...prevFiles]);
          return 0;
        }
        return prev + 25;
      });
    }, 350);
  };

  // Profile Save
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setProfile({ ...tempProfile });
    setEditProfileModalOpen(false);
  };

  const activeContactObj = contacts.find(c => c.id === activeContactId);

  return (
    <div className={`${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen font-sans flex flex-col md:flex-row transition-colors duration-200`}>
      
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
            D
          </div>
          <div>
            <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white">Diroa Health</span>
            <span className="text-[10px] block text-emerald-500 font-semibold -mt-1">Profiles</span>
          </div>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Sidebar Navigation */}
      <aside className={`w-full md:w-64 border-r border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 backdrop-blur-md flex flex-col justify-between ${mobileMenuOpen ? 'block' : 'hidden md:flex'} sticky top-0 h-screen z-40`}>
        <div>
          {/* Logo Header */}
          <div className="hidden md:flex items-center space-x-3 p-6 border-b border-slate-100 dark:border-slate-800/60">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-700 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-emerald-500/20">
              D
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-none">Diroa</h1>
              <p className="text-[11px] font-semibold text-emerald-500 dark:text-emerald-400 tracking-wider uppercase mt-0.5">Health Profiles</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: 'home', label: 'Home Feed', icon: Activity },
              { id: 'profile', label: 'Health Profile', icon: User, badge: 'Active' },
              { id: 'messages', label: 'Messages', icon: MessageSquare, badge: contacts.reduce((a, b) => a + b.unread, 0) },
              { id: 'resources', label: 'Resources', icon: BookOpen },
              { id: 'vault', label: 'Vault', icon: Lock, badge: !isVaultUnlocked ? 'Locked' : 'Unlocked', badgeColor: !isVaultUnlocked ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-400' },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-150 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge !== 0 && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      item.badgeColor
                        ? item.badgeColor
                        : isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Mission Callout */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-500 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Digital Health Identity</span>
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Disrupting the legacy health system and promoting active interest in personal wellness.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white capitalize">
              {activeTab === 'home' && 'Health Feed & Community'}
              {activeTab === 'profile' && 'Digital Health Profile'}
              {activeTab === 'messages' && 'Encrypted Care Messaging'}
              {activeTab === 'resources' && 'Wellness & Clinical Research Hub'}
              {activeTab === 'vault' && 'Encrypted Medical Document Vault'}
              {activeTab === 'settings' && 'Privacy & Account Settings'}
            </h2>
          </div>

          <div className="flex items-center space-x-3 ml-auto">
            {/* Dark Mode Switcher */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Quick Profile Summary Button */}
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center space-x-2 pl-2 pr-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
                alt="Sarah Jenkins"
                className="w-7 h-7 rounded-full object-cover ring-2 ring-emerald-500/40"
              />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 hidden sm:inline">{profile.name}</span>
            </button>
          </div>
        </header>

        {/* Content View Switcher */}
        <div className="p-6 md:p-8 max-w-7xl w-full mx-auto space-y-8 flex-1">

          {}
          {activeTab === 'home' && (
            <div className="space-y-8 animate-fadeIn">
              {/* Mission Hero Header */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-emerald-950 p-8 border border-emerald-500/30 text-white shadow-2xl">
                <div className="relative z-10 max-w-3xl space-y-3">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Diroa Health Ecosystem</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                    Connecting us digitally to our health
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Disrupting the legacy health system and promoting an active, informed interest in personal wellness and medical research.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-3">
                    <button onClick={() => setActiveTab('profile')} className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>View Health Profile</span>
                    </button>
                    <button onClick={() => setActiveTab('vault')} className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2">
                      <Lock className="w-4 h-4 text-emerald-400" />
                      <span>Encrypted Vault</span>
                    </button>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>

              {/* Health Quick Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Primary Care Doctor', value: profile.primaryDoctor, icon: Stethoscope, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                  { label: 'Blood Type & Age', value: `${profile.bloodType} • ${profile.age} Yrs`, icon: Heart, color: 'text-rose-500', bg: 'bg-rose-500/10' },
                  { label: 'Active Prescriptions', value: `${profile.medications.length} Medications`, icon: Pill, color: 'text-amber-500', bg: 'bg-amber-500/10' },
                  { label: 'Encrypted Records', value: `${vaultFiles.length} Vault Documents`, icon: ShieldCheck, color: 'text-teal-500', bg: 'bg-teal-500/10' }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl ${stat.bg}`}>
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{stat.value}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Create Post Card & Category Filter */}
              <div className="space-y-6">
                {/* Create Community Post Form */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center space-x-2">
                    <Plus className="w-4 h-4 text-emerald-500" />
                    <span>Share a Health Update or Discussion</span>
                  </h3>
                  <form onSubmit={handleCreatePost} className="space-y-3">
                    <textarea
                      value={newPostText}
                      onChange={(e) => setNewPostText(e.target.value)}
                      placeholder="Share wellness observations, questions about clinical trials, or health experiences..."
                      rows={2}
                      className="w-full p-3.5 text-xs rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    />
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Topic Category:</span>
                        <select
                          value={newPostCategory}
                          onChange={(e) => setNewPostCategory(e.target.value)}
                          className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                        >
                          <option value="Wellness">Wellness</option>
                          <option value="Clinical Trials">Clinical Trials</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Webinars">Webinars</option>
                        </select>
                      </div>
                      <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all shadow-md">
                        Post to Community Feed
                      </button>
                    </div>
                  </form>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                  {['All', 'Clinical Trials', 'Insurance', 'Wellness', 'Webinars'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFeedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                        feedCategory === cat
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Posts Feed */}
                <div className="space-y-4">
                  {posts
                    .filter(p => feedCategory === 'All' || p.category === feedCategory)
                    .map((post) => (
                      <div key={post.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-emerald-500/30 transition-all">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <img src={post.avatar} alt={post.author} className="w-11 h-11 rounded-2xl object-cover ring-2 ring-emerald-500/20" />
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{post.author}</h4>
                                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                  {post.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 dark:text-slate-400">{post.title} • {post.time}</p>
                            </div>
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {post.category}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                          {post.content}
                        </p>

                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => handleLikePost(post.id)}
                              className={`flex items-center space-x-1.5 font-semibold transition-colors ${post.liked ? 'text-emerald-500' : 'hover:text-slate-900 dark:hover:text-white'}`}
                            >
                              <ThumbsUp className="w-4 h-4" />
                              <span>{post.likes} Likes</span>
                            </button>
                            <button className="flex items-center space-x-1.5 font-semibold hover:text-slate-900 dark:hover:text-white">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post.comments} Comments</span>
                            </button>
                          </div>

                          <button
                            onClick={() => handleBookmarkPost(post.id)}
                            className={`p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 ${post.bookmarked ? 'text-amber-500' : 'text-slate-400'}`}
                          >
                            <Bookmark className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Profile Top Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="flex items-center space-x-4">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80" alt={profile.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-emerald-500/20" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{profile.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Primary Doctor: <span className="font-semibold text-emerald-500">{profile.primaryDoctor}</span></p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Emergency Contact: {profile.emergencyContact}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQrModalOpen(true)}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-all flex items-center space-x-2"
                  >
                    <QrCode className="w-4 h-4 text-emerald-500" />
                    <span>Health Card & QR</span>
                  </button>
                  <button
                    onClick={() => {
                      setTempProfile({ ...profile });
                      setEditProfileModalOpen(true);
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-all flex items-center space-x-2 shadow-md"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Edit Profile</span>
                  </button>
                </div>
              </div>

              {/* Core Physical Vitals Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Age', value: `${profile.age} Years`, icon: Calendar },
                  { label: 'Blood Type', value: profile.bloodType, icon: Heart, highlight: true },
                  { label: 'Height', value: profile.height, icon: Activity },
                  { label: 'Weight', value: profile.weight, icon: Sliders }
                ].map((vit, i) => {
                  const Icon = vit.icon;
                  return (
                    <div key={i} className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-1">
                      <Icon className={`w-5 h-5 mx-auto ${vit.highlight ? 'text-rose-500' : 'text-emerald-500'}`} />
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{vit.label}</p>
                      <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{vit.value}</h4>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Health Categorized Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Allergies & Sensitivities */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Allergies & Sensitivities</h4>
                      <p className="text-[11px] text-slate-400">Critical medical warnings for care providers</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.allergies.map((all, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-500/10 text-rose-500 border border-rose-500/20">
                        {all}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Current Medications */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                      <Pill className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Active Medications & Dosage</h4>
                      <p className="text-[11px] text-slate-400">Prescription routines and dosage notes</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {profile.medications.map((med, i) => (
                      <div key={i} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{med.name} ({med.dosage})</p>
                          <p className="text-[10px] text-slate-400 mt-0.5">{med.frequency}</p>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 font-bold text-[10px]">Active</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Medical History */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-500">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Medical History & Chronic Conditions</h4>
                      <p className="text-[11px] text-slate-400">Diagnoses and ongoing care records</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {profile.medicalHistory.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Health Insurance Coverage */}
                <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Health Insurance Coverage</h4>
                      <p className="text-[11px] text-slate-400">Policy numbers and coverage tier</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400">Provider</span>
                      <span className="font-bold text-slate-900 dark:text-white">{profile.insurance.provider}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400">Policy Number</span>
                      <span className="font-mono font-bold text-emerald-500">{profile.insurance.policyNumber}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400">Group Number</span>
                      <span className="font-mono text-slate-800 dark:text-slate-200">{profile.insurance.groupNumber}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Plan Tier</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{profile.insurance.planType}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {}
          {activeTab === 'messages' && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[600px] animate-fadeIn">
              {/* Contacts Inbox List */}
              <div className="md:col-span-5 lg:col-span-4 border-r border-slate-200 dark:border-slate-800 flex flex-col">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Care Team Messages</h3>
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={chatSearch}
                      onChange={(e) => setChatSearch(e.target.value)}
                      placeholder="Search contacts or doctors..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="divide-y divide-slate-100 dark:divide-slate-800/60 overflow-y-auto flex-1">
                  {contacts
                    .filter(c => c.name.toLowerCase().includes(chatSearch.toLowerCase()) || c.role.toLowerCase().includes(chatSearch.toLowerCase()))
                    .map((contact) => (
                      <div
                        key={contact.id}
                        onClick={() => {
                          setActiveContactId(contact.id);
                          setContacts(contacts.map(c => c.id === contact.id ? { ...c, unread: 0 } : c));
                        }}
                        className={`p-4 flex items-start space-x-3 cursor-pointer transition-colors ${
                          activeContactId === contact.id ? 'bg-emerald-50/70 dark:bg-emerald-950/40' : 'hover:bg-slate-50 dark:hover:bg-slate-800/40'
                        }`}
                      >
                        <div className="relative shrink-0">
                          <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full object-cover" />
                          {contact.online && (
                            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-900"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{contact.name}</h4>
                            <span className="text-[10px] text-slate-400">{contact.time}</span>
                          </div>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{contact.role}</p>
                          <p className="text-xs text-slate-600 dark:text-slate-300 truncate mt-1 font-medium">{contact.lastMsg}</p>
                        </div>
                        {contact.unread > 0 && (
                          <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                            {contact.unread}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              {/* Chat Thread */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col bg-slate-50/50 dark:bg-slate-950/40">
                {activeContactObj ? (
                  <>
                    <div className="p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={activeContactObj.avatar} alt={activeContactObj.name} className="w-9 h-9 rounded-full object-cover" />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">{activeContactObj.name}</h4>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">{activeContactObj.role}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Encrypted HIPAA Channel
                      </span>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-[420px]">
                      {(messagesMap[activeContactId] || []).map((m) => (
                        <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-md rounded-2xl p-3.5 text-xs ${
                            m.sender === 'me'
                              ? 'bg-emerald-600 text-white rounded-br-none shadow-md'
                              : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700/60 shadow-sm'
                          }`}>
                            <p className="leading-relaxed">{m.text}</p>
                            <span className={`text-[9px] mt-1 block text-right ${m.sender === 'me' ? 'text-emerald-200' : 'text-slate-400'}`}>
                              {m.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center space-x-2">
                      <button type="button" className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg">
                        <Paperclip className="w-4 h-4" />
                      </button>
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type a health note or message..."
                        className="flex-1 py-2 px-4 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                      />
                      <button type="submit" className="p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md transition-all">
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
                    <MessageSquare className="w-12 h-12 mb-2 stroke-1" />
                    <p className="text-sm">Select a contact to view chat history.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {}
          {activeTab === 'resources' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Wellness & Clinical Knowledge Hub</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Guides, trial information, and health education to empower your care choices.</p>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={resourceSearch}
                    onChange={(e) => setResourceSearch(e.target.value)}
                    placeholder="Search articles & guides..."
                    className="pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                {['All', 'Clinical Research', 'Insurance', 'Preventive Care', 'Diet & Nutrition'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setResourceCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                      resourceCategory === cat
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Resources Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources
                  .filter(r => (resourceCategory === 'All' || r.category === resourceCategory) && r.title.toLowerCase().includes(resourceSearch.toLowerCase()))
                  .map((item) => (
                    <div key={item.id} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500/40 transition-all">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {item.category}
                          </span>
                          <button
                            onClick={() => setResources(resources.map(r => r.id === item.id ? { ...r, bookmarked: !r.bookmarked } : r))}
                            className="text-slate-400 hover:text-emerald-500"
                          >
                            {item.bookmarked ? <BookmarkCheck className="w-5 h-5 text-emerald-500" /> : <Bookmark className="w-5 h-5" />}
                          </button>
                        </div>
                        <h4 className="font-bold text-base text-slate-900 dark:text-white leading-snug">{item.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.summary}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center space-x-3">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.readTime}</span>
                          </span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                        <button
                          onClick={() => setSelectedResource(item)}
                          className="text-emerald-500 font-bold flex items-center space-x-1 hover:underline"
                        >
                          <span>Read Full Article</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {}
          {activeTab === 'vault' && (
            <div className="space-y-6 animate-fadeIn">
              {!isVaultUnlocked ? (
                /* Vault Security Lock Screen */
                <div className="max-w-xl mx-auto my-12 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto shadow-inner">
                    <Lock className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Encrypted Medical Vault</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      Please re-enter your password / PIN to unlock your private medical records, lab results, and insurance files.
                    </p>
                  </div>

                  <form onSubmit={handleVaultUnlock} className="space-y-4">
                    <div className="relative">
                      <Key className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="password"
                        value={vaultPinInput}
                        onChange={(e) => setVaultPinInput(e.target.value)}
                        placeholder="Enter Vault PIN or Passcode"
                        className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>
                    {vaultError && <p className="text-xs text-rose-500 font-medium">{vaultError}</p>}
                    <button type="submit" className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all">
                      Unlock Medical Vault
                    </button>
                  </form>
                  <p className="text-[11px] text-slate-400">Security Note: Any key or PIN will unlock this demo view.</p>
                </div>
              ) : (
                /* Unlocked Vault Interface */
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900 border border-emerald-500/30 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Unlock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Encrypted Records Storage (AES-256)</h3>
                        <p className="text-xs text-slate-400">{vaultFiles.length} Medical files saved in secure cloud storage.</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={handleUploadVaultFile}
                        disabled={isUploading}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 font-semibold text-xs transition-all flex items-center space-x-2 shadow-md"
                      >
                        <Upload className="w-4 h-4" />
                        <span>{isUploading ? `Uploading (${uploadProgress}%)` : 'Upload Record'}</span>
                      </button>
                      <button
                        onClick={() => setIsVaultUnlocked(false)}
                        className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-all border border-slate-700"
                      >
                        Lock Vault
                      </button>
                    </div>
                  </div>

                  {isUploading && (
                    <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  )}

                  {/* Vault Categories */}
                  <div className="flex items-center space-x-2 overflow-x-auto pb-1">
                    {['All', 'Lab Results', 'Immunization Records', 'Prescriptions', 'Imaging & Scans', 'Insurance Cards'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setVaultCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                          vaultCategory === cat
                            ? 'bg-emerald-600 text-white'
                            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Documents Table */}
                  <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 uppercase tracking-wider font-semibold">
                          <tr>
                            <th className="p-4">Document Name</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Size</th>
                            <th className="p-4">Date Uploaded</th>
                            <th className="p-4">Security Tag</th>
                            <th className="p-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                          {vaultFiles
                            .filter(f => vaultCategory === 'All' || f.category === vaultCategory)
                            .map((file) => (
                              <tr key={file.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="p-4 font-semibold text-slate-900 dark:text-white flex items-center space-x-3">
                                  <FileText className="w-4 h-4 text-emerald-500 shrink-0" />
                                  <span>{file.name}</span>
                                </td>
                                <td className="p-4 text-slate-500 dark:text-slate-400">{file.category}</td>
                                <td className="p-4 text-slate-500 dark:text-slate-400">{file.size}</td>
                                <td className="p-4 text-slate-500 dark:text-slate-400">{file.date}</td>
                                <td className="p-4">
                                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                                    {file.tag}
                                  </span>
                                </td>
                                <td className="p-4 text-right space-x-2">
                                  <button title="Download" className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded text-slate-600 dark:text-slate-300">
                                    <Download className="w-4 h-4" />
                                  </button>
                                  <button
                                    title="Delete"
                                    onClick={() => setVaultFiles(vaultFiles.filter(f => f.id !== file.id))}
                                    className="p-1.5 hover:bg-rose-500/10 rounded text-rose-500"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {}
          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
              {/* Account & Data Permissions */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Health Data & Privacy Settings</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Manage who has access to view your health profile and vault records.</p>
                </div>

                <div className="space-y-4 divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Dr. John Doe (Primary Physician)</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Full access to medical history and vault lab records.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={sharingPermissions.drJohn}
                      onChange={(e) => setSharingPermissions({ ...sharingPermissions, drJohn: e.target.checked })}
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Esteban Jenkins (Emergency Contact / Family)</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Access to emergency medical ID and allergy summary.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={sharingPermissions.esteban}
                      onChange={(e) => setSharingPermissions({ ...sharingPermissions, esteban: e.target.checked })}
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Clinical Research Matching</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Allow anonymized health metric matching for clinical trials.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={sharingPermissions.researchers}
                      onChange={(e) => setSharingPermissions({ ...sharingPermissions, researchers: e.target.checked })}
                      className="w-4 h-4 accent-emerald-600 rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Platform Contact & Mission Info */}
              <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Diroa Health Contact & Platform Support</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-slate-400">Support Email</p>
                      <a href="mailto:contact.diroa@gmail.com" className="font-bold text-slate-900 dark:text-white hover:underline">
                        contact.diroa@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                    <div>
                      <p className="text-slate-400">Helpline / Phone</p>
                      <a href="tel:8067901315" className="font-bold text-slate-900 dark:text-white hover:underline">
                        806-790-1315
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {}
      {/* Article Reader Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500">
                {selectedResource.category}
              </span>
              <button onClick={() => setSelectedResource(null)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">{selectedResource.title}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">{selectedResource.content}</p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button onClick={() => setSelectedResource(null)} className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs">
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Digital Emergency QR / Health Card Modal */}
      {qrModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-6 shadow-2xl text-center">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Digital Emergency Health ID</span>
              <button onClick={() => setQrModalOpen(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Emergency Card Display */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-teal-950 text-white border border-emerald-500/30 text-left space-y-4 shadow-inner">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-emerald-400 uppercase">Diroa Health ID</p>
                  <h4 className="text-base font-bold">{profile.name}</h4>
                  <p className="text-xs text-slate-300">Age {profile.age} • Blood Type: {profile.bloodType}</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-slate-900" />
                </div>
              </div>

              <div className="space-y-1 text-xs border-t border-slate-800 pt-3">
                <p className="text-slate-400">Allergies: <span className="text-rose-400 font-semibold">{profile.allergies.join(', ')}</span></p>
                <p className="text-slate-400">Emergency Contact: <span className="text-slate-200">{profile.emergencyContact}</span></p>
                <p className="text-slate-400">Doctor: <span className="text-slate-200">{profile.primaryDoctor}</span></p>
              </div>
            </div>

            <div className="flex justify-center space-x-3">
              <button onClick={() => window.print()} className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center space-x-2">
                <Printer className="w-4 h-4" />
                <span>Print Health ID</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {editProfileModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Edit Health Profile</h3>
              <button onClick={() => setEditProfileModalOpen(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={tempProfile.name}
                    onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Blood Type</label>
                  <input
                    type="text"
                    value={tempProfile.bloodType}
                    onChange={(e) => setTempProfile({ ...tempProfile, bloodType: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Age</label>
                  <input
                    type="number"
                    value={tempProfile.age}
                    onChange={(e) => setTempProfile({ ...tempProfile, age: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Primary Doctor</label>
                  <input
                    type="text"
                    value={tempProfile.primaryDoctor}
                    onChange={(e) => setTempProfile({ ...tempProfile, primaryDoctor: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Emergency Contact</label>
                <input
                  type="text"
                  value={tempProfile.emergencyContact}
                  onChange={(e) => setTempProfile({ ...tempProfile, emergencyContact: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-end space-x-2">
                <button type="button" onClick={() => setEditProfileModalOpen(false)} className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 rounded-xl bg-emerald-600 text-white font-bold">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}