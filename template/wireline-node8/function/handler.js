//
// Copyright 2017 Wireline, Inc.
//

// Enable source map support.
// https://github.com/evanw/node-source-map-support#programmatic-usage
import 'source-map-support/register';

import Wireline from '@wirelineio/sdk';

module.exports = {
  hello: Wireline.exec(async (event, context, response) => {
    let { name='World' } = event.queryStringParameters || {};

    response.send({
      message: `Hello, ${name}!`
    });
  }),
  get root () { return this.hello }
};
