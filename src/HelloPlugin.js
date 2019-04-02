class HelloPlugin {
  apply(compiler) {
    compiler.hooks.environment.tap('Plguin',
      () => {
        console.log('environment')
      }
    )
    compiler.hooks.afterEnvironment.tap('Plguin',
      () => {
        console.log('afterEnvironment')
      }
    )
    compiler.hooks.entryOption.tap('Plguin',
      (ctx, entry) => {
        console.log('entryOption')
      }
    )
    compiler.hooks.afterPlugins.tap('Plguin',
      () => {
        console.log('afterPlugins')
      }
    )
    compiler.hooks.afterResolvers.tap('Plguin',
      () => {
        console.log('afterResolvers')
      }
    )
    compiler.hooks.watchRun.tap('Plguin',
      (compiler) => {
        console.log('watchRun')
      }
    )
    compiler.hooks.normalModuleFactory.tap('Plguin',
      (normalModuleFactory) => {
        console.log('normalModuleFactory')
      }
    )
    compiler.hooks.contextModuleFactory.tap('Plguin',
      () => {
        console.log('contextModuleFactory')
      }
    )
    compiler.hooks.compile.tap('Plguin',
      (params) => {
        console.log('compile')
      }
    )
    compiler.hooks.thisCompilation.tap('Plguin',
      (compilation, compilationParams) => {

        console.log('thisCompilation')

        compilation.hooks.buildModule.tap('Build',
          (module) => {
            console.log('==== Build Module', module.request)
          }
        )
        compilation.hooks.seal.tap('Build',
          () => {
            console.log('==== Seal')
          }
        )
        compilation.hooks.unseal.tap('Build',
          () => {
            console.log('==== Unseal')
          }
        )

        compilation.options.entry['user2'] = './src/user2/index.js'
      }
    )
    // compiler.hooks.compilation.tap('Plguin',
    //   (compilation, compilationParams) => {
    //     console.log('compilation')
    //     compilation.hooks.buildModule.tap('Build',
    //       (module) => {
    //         console.log('==== Build Module', module.request)
    //       }
    //     )
    //     compilation.hooks.seal.tap('Build',
    //       () => {
    //         console.log('==== Seal')
    //       }
    //     )
    //     compilation.hooks.unseal.tap('Build',
    //       () => {
    //         console.log('==== Unseal')
    //       }
    //     )
    //   }
    // )
    compiler.hooks.make.tap('Plguin',
      () => {
        console.log('make')
      }
    )
    compiler.hooks.watchClose.tap('Plguin',
      () => {
        console.log('watchClose')
      }
    )
  }
}

module.exports = HelloPlugin
