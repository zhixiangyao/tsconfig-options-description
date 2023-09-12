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
