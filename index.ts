// compilerOptions.allowUnreachableCode
{
  function fn(n: number) {
    if (n > 5) {
      return true
    } else {
      return false
    }
    return true
  }
}

// compilerOptions.allowUnusedLabels
{
  function verifyAge(age: number) {
    // Forgot 'return' statement
    if (age > 18) {
      verified: true
    }
  }
}

// compilerOptions.strictBindCallApply
{
  function fn1(x: string) {
    return parseInt(x)
  }
  const n1 = fn1.call(undefined, '10')
  const n2 = fn1.call(undefined, false)
}

// compilerOptions.strictFunctionTypes
{
  function fn2(x: string) {
    console.log('Hello, ' + x.toLowerCase())
  }

  type StringOrNumberFunc = (ns: string | number) => void

  // Unsafe assignment
  let func: StringOrNumberFunc = fn2
  // Unsafe call - will crash
  func(10)
}
