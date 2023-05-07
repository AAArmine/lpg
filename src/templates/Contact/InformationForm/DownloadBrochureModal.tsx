import React from 'react';
import Modal from 'react-modal';
import { useTranslations } from '../../../locale';
import BrochureIcon from '../../../../public/assets/images/brochure.png';
import { event as gTagEvent } from '../../../lib/gtag';
import { getGtagEventAction } from '../utils/tracking';

Modal.setAppElement('#__next');

interface DownloadBrochureModalProps {
  onClose: () => void;
}

export const DownloadBrochureModal: React.FC<DownloadBrochureModalProps> = ({
  onClose,
}) => {
  const t = useTranslations('contact-form');
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="download-brochure-modal"
      contentLabel="Example Modal"
    >
      <div className="inner">
        <div className="body">
          <img alt="pdf brochure" src={BrochureIcon.src} />
        </div>
        <nav>
          <button className="close" onClick={onClose}>
            {t('close')}
          </button>
          <a
            className="download"
            onClick={() => {
              gTagEvent({
                action: getGtagEventAction(
                  'brochure_downloaded',
                  'information'
                ),
                category: 'ContactForm',
                label: 'Information',
              });
              onClose();
            }}
            title="Gniw Infomaterial 2021"
            target="_blank"
            href="https://www.datocms-assets.com/54855/1638892004-gniw-infomaterial-2021.pdf"
            rel="alternate noreferrer"
            type="application/pdf"
          >
            {t('downloadBrochure')}
          </a>
        </nav>
      </div>
    </Modal>
  );
};
