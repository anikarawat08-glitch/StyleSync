import React from 'react';
import { useFashion } from '../context/FashionContext';
import { FiCheckCircle, FiHeart, FiInfo } from 'react-icons/fi';

export const Toast = () => {
  const { toast } = useFashion();

  if (!toast.visible) return null;

  const getIcon = () => {
    switch (toast.type) {
      case 'heart':
        return <FiHeart size={18} fill="#D47B75" color="#D47B75" />;
      case 'success':
        return <FiCheckCircle size={18} color="#2A9D8F" />;
      default:
        return <FiInfo size={18} color="#D47B75" />;
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 3000,
        backgroundColor: '#FFFFFF',
        color: 'var(--text-primary)',
        padding: '14px 20px',
        borderRadius: 'var(--radius-full)',
        boxShadow: '0 12px 32px rgba(35, 31, 32, 0.16)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1px solid rgba(232, 168, 161, 0.5)',
        animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        maxWidth: '90vw'
      }}
    >
      <div style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'var(--blush-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {getIcon()}
      </div>
      <span style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        letterSpacing: '0.01em'
      }}>
        {toast.message}
      </span>
    </div>
  );
};
