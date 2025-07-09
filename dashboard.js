// dashboard.js for Webfix Dashboard Analytics

document.addEventListener('DOMContentLoaded', function() {
    // Sample data
    const membershipTypes = ['Basic', 'Pro', 'Premium'];
    const offers = ['Student', 'Employee', 'Owner'];
    const people = [
        'Aarav Sharma', 'Isha Patel', 'Kabir Singh', 'Meera Nair', 'Rohan Das',
        'Simran Kaur', 'Yash Mehta', 'Priya Verma', 'Aditya Rao', 'Sneha Joshi',
        'Rahul Jain', 'Ananya Gupta', 'Vikram Sethi', 'Tara Kapoor', 'Dev Mishra',
        'Neha Bansal', 'Arjun Malhotra', 'Pooja Reddy', 'Kunal Chawla', 'Riya Sen'
    ];

    // Generate random analytics data
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // Membership distribution
    const membershipCounts = [getRandomInt(20, 60), getRandomInt(10, 40), getRandomInt(5, 25)];
    // Offers distribution
    const offersCounts = [getRandomInt(10, 30), getRandomInt(10, 30), getRandomInt(10, 30)];

    // Fill table with 10 random people
    const membersTableBody = document.getElementById('membersTableBody');
    let usedNames = [];
    for (let i = 0; i < 10; i++) {
        let name;
        do {
            name = people[getRandomInt(0, people.length - 1)];
        } while (usedNames.includes(name));
        usedNames.push(name);
        const membership = membershipTypes[getRandomInt(0, membershipTypes.length - 1)];
        const offer = offers[getRandomInt(0, offers.length - 1)];
        const row = `<tr><td>${name}</td><td>${membership}</td><td>${offer}</td></tr>`;
        membersTableBody.insertAdjacentHTML('beforeend', row);
    }

    // Pie chart for membership types
    const ctxPie = document.getElementById('membershipPie').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: membershipTypes,
            datasets: [{
                data: membershipCounts,
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // Bar chart for offers
    const ctxBar = document.getElementById('offersBar').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: offers,
            datasets: [{
                label: 'Number of People',
                data: offersCounts,
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Summary stats
    const totalMembers = membershipCounts.reduce((a, b) => a + b, 0);
    const totalOffers = offersCounts.reduce((a, b) => a + b, 0);
    const summaryList = document.getElementById('dashboardSummary');
    summaryList.innerHTML = `
        <li><strong>Total Members:</strong> ${totalMembers}</li>
        <li><strong>Membership Breakdown:</strong> Basic (${membershipCounts[0]}), Pro (${membershipCounts[1]}), Premium (${membershipCounts[2]})</li>
        <li><strong>Total Offers Availed:</strong> ${totalOffers}</li>
        <li><strong>Offers Breakdown:</strong> Student (${offersCounts[0]}), Employee (${offersCounts[1]}), Owner (${offersCounts[2]})</li>
        <li><strong>Active Users (last 24h):</strong> ${getRandomInt(5, totalMembers)}</li>
        <li><strong>Posts Published:</strong> ${getRandomInt(20, 100)}</li>
        <li><strong>Pages Created:</strong> ${getRandomInt(5, 30)}</li>
        <li><strong>Templates Used:</strong> ${getRandomInt(3, 15)}</li>
        <li><strong>Offers Created:</strong> ${getRandomInt(3, 10)}</li>
        <li><strong>Site Visits (last 7d):</strong> ${getRandomInt(100, 1000)}</li>
    `;
}); 