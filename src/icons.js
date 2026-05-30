// Tree-shaken brand marks (simple-icons ships ESM with sideEffects:false,
// so only the icons imported here land in the bundle). Each is a single
// 24x24 path that recolors via currentColor — no colored badge soup.
import {
    siPhp,
    siTypescript,
    siJavascript,
    siCplusplus,
    siLaravel,
    siVuedotjs,
    siMysql,
    siDocker,
    siGit
} from 'simple-icons';

// "Cloud infrastructure" has no single brand mark — a neutral glyph stands in.
const cloud = {
    title: 'Cloud',
    path: 'M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
};

export const icons = {
    php: siPhp,
    typescript: siTypescript,
    javascript: siJavascript,
    cpp: siCplusplus,
    laravel: siLaravel,
    vue: siVuedotjs,
    mysql: siMysql,
    docker: siDocker,
    git: siGit,
    cloud,
};
