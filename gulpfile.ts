import { task } from 'gulp';
import * as nodemon from 'gulp-nodemon';

task('run-server', () => {
  nodemon({
    script: 'src/server/index.ts',
  });
});
