import {config, library} from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelopeOpen,
    faFileVideo,
    faBook,
} from '@fortawesome/free-solid-svg-icons';

import {
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

// Prevent fontawesome from dynamically adding its css since
// we do it in gatsby-browser / gatsby-ssr.
config.autoAddCss = false;

library.add(
    faEnvelopeOpen,
    faFileVideo,
    faBook,
    faTwitter,
    faInstagram
);