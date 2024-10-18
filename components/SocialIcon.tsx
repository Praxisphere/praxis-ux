import React from 'react';
import { IconType } from 'react-icons';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import {FaEnvelope, FaPhone} from 'react-icons/fa';
import {FaLocationPin} from 'react-icons/fa6';

type IconName = 'facebook' | 'twitter' | 'github' | 'linkedin' | 'mail' | 'phone' | 'address';

const iconMap: Record<IconName, IconType> = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  phone: FaPhone,
  address: FaLocationPin,
};

interface SocialIconProps {
  name: IconName;
  size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, size = 24 }) => {
  const Icon = iconMap[name];

  return (
    <div className="social-icon">
      <Icon size={size} />
    </div>
  );
};

export default SocialIcon;