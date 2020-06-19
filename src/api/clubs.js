const API_URL = 'https://instasport.co/dashboard/api/v1/clubs/';

export async function getClubs() {
  return fetch(API_URL).then(res => res.json());
}

