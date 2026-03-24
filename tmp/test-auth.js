
async function test() {
  const url = 'http://localhost:3000/api/google/reply';
  
  console.log('--- TEST 1: NO AUTH ---');
  try {
    const res1 = await fetch(url);
    console.log('Status:', res1.status);
    console.log('Body:', await res1.json());
  } catch (e) {
    console.log('Failed:', e.message);
  }

  console.log('\n--- TEST 2: DEV BYPASS ---');
  try {
    const res2 = await fetch(url, {
      headers: { 'x-dev-bypass': 'true' }
    });
    console.log('Status:', res2.status);
    console.log('Body:', await res2.json());
  } catch (e) {
    console.log('Failed:', e.message);
  }
}

test();
