import { test, expect } from '@playwright/test';

let pharmacieId: number;

const baseURL = 'http://localhost:8081/pharmacies';  

test.describe('API Pharmacie de Garde', () => {

  // CREATE - POST
  test('POST - Créer une pharmacie', async ({ request }) => {
    const response = await request.post(baseURL, {
      data: {
        id: 0,
        dateFrom: "01/03/2026",
        dateTo: "05/03/2026",
        lieu: "Sartrouville",
        pharmacieName: "Ntaher",
        adress2: "2 rue suger",
        tel: "0745313152"
      }
    });

    expect(response.status()).toBe(201); 

    const body = await response.json();
    pharmacieId = body.id;

    console.log("Pharmacie créée ID:", pharmacieId);

    test.info().attach('POST /pharmacies Response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json'
    });
  });

  // GET ALL
  test('GET - Récupérer toutes les pharmacies', async ({ request }) => {
    const response = await request.get(baseURL);
    expect(response.status()).toBe(200);

    const pharmacies = await response.json();
    expect(Array.isArray(pharmacies)).toBeTruthy();

    // Vérifie que la pharmacie créée existe
    const created = pharmacies.find((p: any) => p.id === pharmacieId);
    expect(created).toBeTruthy();

    test.info().attach('GET /pharmacies Response', {
      body: JSON.stringify(pharmacies, null, 2),
      contentType: 'application/json'
    });

    console.log('Liste des pharmacies:', pharmacies);
  });

  // READ - GET BY ID
  test('GET - Récupérer pharmacie par ID', async ({ request }) => {
    const response = await request.get(`${baseURL}/${pharmacieId}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(pharmacieId);

    test.info().attach('GET /pharmacies/:id Response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json'
    });

    console.log('Pharmacie récupérée par ID:', body);
  });

  // UPDATE - PUT
  test('PUT - Modifier pharmacie', async ({ request }) => {
    const response = await request.put(`${baseURL}/${pharmacieId}`, {
      data: {
        dateFrom: "02/03/2026",
        dateTo: "06/03/2026",
        lieu: "Paris",
        pharmacieName: "Ntaher Modifiée",
        adress2: "10 rue Nouvelle",
        tel: "0745313152"
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.lieu).toBe("Paris");

    test.info().attach('PUT /pharmacies/:id Response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json'
    });

    console.log('Pharmacie modifiée:', body);
  });

  // DELETE - DELETE
  test('DELETE - Supprimer pharmacie', async ({ request }) => {
    const response = await request.delete(`${baseURL}/${pharmacieId}`);
    expect(response.status()).toBe(204);

    test.info().attach('DELETE /pharmacies/:id', {
      body: `Pharmacie ID ${pharmacieId} supprimée`,
      contentType: 'text/plain'
    });

    console.log(`Pharmacie ID ${pharmacieId} supprimée`);
  });

});
