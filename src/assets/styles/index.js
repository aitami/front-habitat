import styledSkeleton from 'styled-skeleton';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
    ${styledSkeleton}

    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
        padding: 0;
        margin: 0;
        font-size: 100%;
        vertical-align: baseline;
        letter-spacing: 0;
    }

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font: 1em 'Lato', sans-serif;
    }

    html, body, main {
        height: 100%;
        width: 100%;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote, q {
        &:before, &:after {
            content: '';
        }
    }

    a {
        text-decoration: none;

        &:hover {
            color: blue;
            text-decoration: none;
        }
    }

    address {
        font-style: normal;
    }

    button.buttonless {
        padding: 0;
        height: auto;
        border: 0;
        margin: 0;
        border-radius: 0;
        letter-spacing: 0;
        text-align: left;
    }
`;
