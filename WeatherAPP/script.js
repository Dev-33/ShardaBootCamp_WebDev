document.getElementById('weather-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const city = document.getElementById('city-input').value.trim();
  const weatherInfo = document.querySelector('.weather-info');

  if (!city) {
    weatherInfo.style.display = 'none';  // ❌ Don't show anything if no city
    weatherInfo.innerHTML = '';          // ❌ Clear any previous content
    return;
  }

  try {
    const res = await fetch(`http://localhost:8000/weather?city=${encodeURIComponent(city)}`);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    weatherInfo.innerHTML = `
      <h2><span class="emoji">📍</span>${data.city}</h2>
      <p><span class="emoji">🌡️</span>Temperature: <strong>${data.temperature}°C</strong></p>
      <p><span class="emoji">⛅</span>Condition: ${data.condition}</p>
      <p><span class="emoji">💧</span>Humidity: ${data.humidity}%</p>
      <p><span class="emoji">🌬️</span>Wind Speed: ${data.wind_speed} km/h</p>
    `;
    weatherInfo.style.display = 'block';  // ✅ Show after success
  } catch (err) {
    weatherInfo.innerHTML = `<p style="color: red; text-align: center;">City not found or API error.</p>`;
    weatherInfo.style.display = 'block';  // ✅ Show error message
  }
});

// Also trigger search on image click
document.getElementById('search-icon').addEventListener('click', () => {
  document.getElementById('weather-form').dispatchEvent(new Event('submit'));
});
