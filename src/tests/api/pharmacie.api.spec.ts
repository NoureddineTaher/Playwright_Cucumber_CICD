import { test, expect } from '@playwright/test';
import pharmacieData from './data/pharmacie.json';
import dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.BASE_URL as string;
let pharmacieId: number;

test.describe('API Pharmacie de Garde', () => {

  // CREATE - POST
  test('POST - Créer une pharmacie', async ({ request }) => {

    const response = await request.post(baseURL, {
      data: pharmacieData[0]
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    pharmacieId = body.id;

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

    const created = pharmacies.find((p: any) => p.id === pharmacieId);
    expect(created).toBeTruthy();

    test.info().attach('GET /pharmacies Response', {
      body: JSON.stringify(pharmacies, null, 2),
      contentType: 'application/json'
    });

  });

  // GET BY ID
  test('GET - Récupérer pharmacie par ID', async ({ request }) => {

    const response = await request.get(`${baseURL}/${pharmacieId}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(pharmacieId);

    test.info().attach('GET /pharmacies/:id Response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json'
    });

  });

  // UPDATE - PUT
  test('PUT - Modifier pharmacie', async ({ request }) => {

    const response = await request.put(`${baseURL}/${pharmacieId}`, {
      data: pharmacieData[1]
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    // Vérifie que les données ont bien été mises à jour
    expect(body.lieu).toBe(pharmacieData[1].lieu);
    expect(body.pharmacieName).toBe(pharmacieData[1].pharmacieName);

    test.info().attach('PUT /pharmacies/:id Response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json'
    });

  });

  // DELETE
  test('DELETE - Supprimer pharmacie', async ({ request }) => {

    let response = await request.delete(`${baseURL}/${pharmacieId}`);

    // suppression OK
    expect([200, 204]).toContain(response.status());

    test.info().attach('DELETE /pharmacies/:id', {
      body: `Pharmacie ID ${pharmacieId} supprimée`,
      contentType: 'text/plain'
    });

    // deuxième suppression → doit retourner erreur
    response = await request.delete(`${baseURL}/${pharmacieId}`);

    expect([400, 404]).toContain(response.status());

    const body = await response.text();

    console.log(`Deuxième tentative suppression:`, body);

  });

});