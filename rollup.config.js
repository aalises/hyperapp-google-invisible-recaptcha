import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: `./src/InvisibleRecaptcha.js`,
    output: [
      { file: 'dist/lib/recaptcha.es.js', name: 'hyperappInvRecaptcha', format: 'es' },
      { file: 'dist/lib/recaptcha.umd.js', name: 'hyperappInvRecaptcha', format: 'umd' }
    ],
    plugins: [
        babel({
          exclude: 'node_modules/**'
        }),
        terser()
    ]
}