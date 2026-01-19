// Device detection utility
export const isAndroid = () => {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent.toLowerCase();
  return /android/.test(ua);
};

export const isIOS = () => {
  if (typeof window === 'undefined') return false;

  const ua = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(ua);
};

export const isMobile = () => {
  if (typeof window === 'undefined') return false;

  return isAndroid() || isIOS();
};

// Get optimized styles based on device
export const getDeviceOptimizedStyles = () => {
  const android = isAndroid();

  return {
    // Particle count
    particleCount: android ? 12 : 30,

    // Box styles
    getBoxShadow: (featured = false) => {
      if (android) {
        // Simplified shadows for Android
        return featured
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(237, 205, 103, 0.6), inset 0 0 80px rgba(255, 248, 220, 0.15)'
          : '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 40px rgba(237, 205, 103, 0.4), inset 0 0 60px rgba(255, 248, 220, 0.1)';
      } else {
        // Full experience for iOS/Desktop with backdrop-blur
        return featured
          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(237, 205, 103, 0.6), inset 0 0 80px rgba(255, 248, 220, 0.15)'
          : '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 40px rgba(237, 205, 103, 0.4), inset 0 0 60px rgba(255, 248, 220, 0.1)';
      }
    },

    // Background styles
    getBackdropClass: () => {
      return android ? '' : 'backdrop-blur-sm';
    },

    // Particle effects
    getParticleShadow: () => {
      if (android) {
        return '0 0 10px rgba(237, 205, 103, 0.4)';
      } else {
        return '0 0 10px rgba(237, 205, 103, 0.4), 0 0 20px rgba(255, 248, 220, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)';
      }
    },

    getParticleFilter: () => {
      return android ? 'none' : 'blur(0.5px)';
    },

    // Transform optimizations
    useHardwareAcceleration: android,
  };
};
