export class AuthServive {
  loggedIn = false;

  isAuthenticated(): Promise<boolean> {
    const promise: Promise<boolean> = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }
  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
