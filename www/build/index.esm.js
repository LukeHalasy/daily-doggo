import { A as ActiveRouter } from './active-router-0e196402.js';
import './match-path-760e1797.js';
import './index-42c6a915.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
