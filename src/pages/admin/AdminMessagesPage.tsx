import React, { useState } from 'react';
import { 
  Mail, 
  Reply, 
  Trash2, 
  Search, 
  Eye
} from 'lucide-react';
import { useData } from '../../context/DataContext';
import { useToast } from '../../context/ToastContext';
import type { ContactMessage, MessageStatus } from '../../types';
import { GlassCard } from '../../components/common/GlassCard';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Modal } from '../../components/common/Modal';

export const AdminMessagesPage: React.FC = () => {
  const { messages, updateMessageStatus, deleteMessage } = useData();
  const { success } = useToast();

  const [activeFilter, setActiveFilter] = useState<'all' | 'unread' | 'read' | 'replied'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const filteredMessages = messages
    .filter((m) => activeFilter === 'all' || m.status === activeFilter)
    .filter(
      (m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleOpenMessage = (msg: ContactMessage) => {
    setSelectedMessage(msg);
    if (msg.status === 'unread') {
      updateMessageStatus(msg.id, 'read');
    }
  };

  const handleSetStatus = (id: string, status: MessageStatus) => {
    updateMessageStatus(id, status);
    success('Status Updated', `Message marked as ${status}.`);
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage({ ...selectedMessage, status });
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this message?')) {
      deleteMessage(id);
      success('Message Deleted', 'The inquiry has been deleted.');
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const getStatusBadge = (status: MessageStatus) => {
    switch (status) {
      case 'unread':
        return <Badge variant="cyan" size="sm" pulse>Unread</Badge>;
      case 'read':
        return <Badge variant="slate" size="sm">Read</Badge>;
      case 'replied':
        return <Badge variant="emerald" size="sm">Replied</Badge>;
    }
  };

  return (
    <div className="space-y-8 font-sans">
      {/* 1. Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Contact Message Inbox</h1>
          <p className="text-xs text-slate-400 mt-1">
            Review, reply, and organize inquiries sent through the portfolio contact console.
          </p>
        </div>
      </div>

      {/* 2. Filters & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#090e1a] border border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {(['all', 'unread', 'read', 'replied'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium capitalize transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {filter} ({filter === 'all' ? messages.length : messages.filter((m) => m.status === filter).length})
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search sender, email, subject..."
            className="w-full pl-10 pr-4 py-2 bg-[#060a14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
          />
        </div>
      </div>

      {/* 3. Messages List */}
      <div className="space-y-3">
        {filteredMessages.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#090e1a] border border-slate-800/80">
            <Mail className="w-10 h-10 text-slate-500 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-300">No messages in this folder.</p>
          </div>
        ) : (
          filteredMessages.map((msg) => (
            <GlassCard
              key={msg.id}
              className={`p-4 sm:p-5 border transition-all cursor-pointer ${
                msg.status === 'unread'
                  ? 'border-cyan-500/40 bg-[#0c1424]/90 shadow-lg shadow-cyan-950/30'
                  : 'border-slate-800 bg-[#070b14]/90'
              }`}
              onClick={() => handleOpenMessage(msg)}
              glowColor="cyan"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{msg.name}</h3>
                    <span className="text-xs text-slate-400 font-mono">&lt;{msg.email}&gt;</span>
                    {getStatusBadge(msg.status)}
                  </div>
                  <p className="text-xs font-semibold text-cyan-300/90">{msg.subject}</p>
                  <p className="text-xs text-slate-400 line-clamp-1 leading-relaxed">{msg.message}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <span className="text-[11px] font-mono text-slate-500">
                    {new Date(msg.createdAt).toLocaleString()}
                  </span>
                  <Eye className="w-4 h-4 text-slate-400 hover:text-cyan-400" />
                </div>
              </div>
            </GlassCard>
          ))
        )}
      </div>

      {/* 4. Message Reader Modal */}
      <Modal
        isOpen={!!selectedMessage}
        onClose={() => setSelectedMessage(null)}
        title={selectedMessage?.subject || 'Message Details'}
        subtitle={`From: ${selectedMessage?.name} (${selectedMessage?.email})`}
        maxWidth="lg"
      >
        {selectedMessage && (
          <div className="space-y-5 font-sans text-xs">
            <div className="p-4 rounded-xl bg-[#080d19] border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-slate-400 font-mono text-[11px]">
                <span>Date: {new Date(selectedMessage.createdAt).toLocaleString()}</span>
                <span>{getStatusBadge(selectedMessage.status)}</span>
              </div>
              <div className="text-slate-300 font-medium">Sender: {selectedMessage.name}</div>
              <div className="text-cyan-400 font-mono">Email: {selectedMessage.email}</div>
            </div>

            <div className="p-4 rounded-xl bg-[#060a14] border border-slate-800 space-y-2">
              <span className="font-mono text-slate-400 font-bold uppercase text-[10px]">Message Body:</span>
              <p className="text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
                {selectedMessage.message}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedMessage.email}?subject=Re: ${encodeURIComponent(selectedMessage.subject)}`}
                  onClick={() => handleSetStatus(selectedMessage.id, 'replied')}
                >
                  <Button size="sm" variant="gradient" icon={<Reply className="w-3.5 h-3.5" />}>
                    Reply via Email
                  </Button>
                </a>

                {selectedMessage.status !== 'unread' && (
                  <Button size="sm" variant="secondary" onClick={() => handleSetStatus(selectedMessage.id, 'unread')}>
                    Mark Unread
                  </Button>
                )}
              </div>

              <button
                onClick={() => handleDelete(selectedMessage.id)}
                className="p-2 rounded-xl bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 transition-colors"
                title="Delete Message"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};
