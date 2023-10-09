class FunctionsAlphabeticallySortedChecker {
  constructor(_reporter, _config) {
    this.ruleId = 'functions-alphabetically-sorted'

    this.reporter = _reporter
    this.config = _config
  }

  ContractDefinition(_ctx) {
    const children = _ctx.subNodes
    const initialFunctions = children.filter(({ type, name }) => type === 'FunctionDefinition' && name)

    const app = [...initialFunctions].sort((_a, _b) => (_a.name < _b.name ? -1 : 1))
    const lastInternalOrPrivateFunctionIndex = app.findIndex(({ name }) => name[0] !== '_')
    const internalOrPrivateFunctions = app.slice(0, lastInternalOrPrivateFunctionIndex)
    const publicOrExternalPrivateFunctions = app.slice(lastInternalOrPrivateFunctionIndex, app.length)
    const orderedFunctions = [...publicOrExternalPrivateFunctions, ...internalOrPrivateFunctions]

    for (let i = 0; i < orderedFunctions.length; i++) {
      const expectedFunction = orderedFunctions[i]
      const currentFunction = initialFunctions[i]

      if (expectedFunction.name !== currentFunction.name) {
        this.reporter.error(
          expectedFunction,
          this.ruleId,
          `Invalid functions order. Expected: ${JSON.stringify(
            orderedFunctions.map(({ name }) => name)
          )}`
        )
        break
      }
    }
  }
}

module.exports = [FunctionsAlphabeticallySortedChecker]
