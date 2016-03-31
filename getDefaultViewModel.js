'use strict';

function getDefaultViewModel (done) {
    /*
    done(null, {
      author: {
        contact: 'Nicolas Bevacqua <foo@bevacqua.io>',
        twitter: '@nzgb'
      },
      description: '',
      model: {
        title: 'Pony Foo',
        pkg: {
          version: pkg.version
        },
        env: {
          name: name,
          authority: authority
        },
        meta: {
          description: 'Pony Foo is a technical blog maintained by Nicolas Bevacqua, where he shares his thoughts on JavaScript and the web. Nico likes writing, public speaking, and open-source.',
          images: [authority + '/img/thumbnail.png'],
          keywords: []
        },
        bioHtml: data.bioHtml
      },
      javascriptLoader: data.javascriptLoader,
      styleLoader: data.styleLoader,
      fontLoader: data.fontLoader
    });
    */
    done(null, {
      model: {
        title: 'ScribDen',
      }
    });
}

module.exports = getDefaultViewModel;