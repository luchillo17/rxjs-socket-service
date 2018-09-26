import { task, series, parallel, watch } from 'gulp';
import * as nodemon from 'gulp-nodemon';

export function runServer(done) {
  const server = nodemon({
    script: 'src/server/index.ts',
  });
  return done();
}

export function runTest(done) {
  console.log('====================================');
  console.log('Exec serie');
  console.log('====================================');
  return series(runServer)(done);
  // TODO add jest for testing before creating the run test task, will depend of jest or angular testBed
  // return watch
}

export default series(runServer, runTest);
