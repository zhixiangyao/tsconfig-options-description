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

// compilerOptions.strictNullChecks
{
  const loggedInUsername: string = 'Yao'

  const users = [
    { name: 'Oby', age: 12 },
    { name: 'Heera', age: 32 },
  ]

  const loggedInUser = users.find(u => u.name === loggedInUsername)
  console.log(loggedInUser.age)
}

// compilerOptions.strictPropertyInitialization 2.7
{
  class UserAccount {
    name: string
    accountType = 'user'

    email: string

    address: string | undefined

    constructor(name: string) {
      this.name = name
      // Note that this.email is not set
    }
  }
}

// compilerOptions.useUnknownInCatchVariables 4.4
{
  try {
    // ...
  } catch (err) {
    // err: any => err: unknown

    // We have to verify err is an
    // error before using it as one.
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
}

// compilerOptions.noImplicitAny 2.0
{
  function fn3(s) {
    // Parameter 's' implicitly has an 'any' type.
    console.log(s.subtr(3))
  }
  fn3(42)
}
