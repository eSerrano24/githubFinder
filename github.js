class GitHub {
  constructor() {
    this.client_id = "708261981176baf97843";
    this.client_secret = "0e131d1fe655a898b5eb8cf4498958905b5fc93c";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
