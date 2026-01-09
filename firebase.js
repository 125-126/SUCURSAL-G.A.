<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyAfZ0WZVzMxUX2bWmP-iJ0SB-r4q9r026g",
  authDomain: "sucursal-ga.firebaseapp.com",
  databaseURL: "https://sucursal-ga-default-rtdb.firebaseio.com",
  projectId: "sucursal-ga",
  storageBucket: "sucursal-ga.appspot.com",
  messagingSenderId: "692794208494",
  appId: "1:692794208494:web:9ef044edad3263926943ff"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

window.database = firebase.database();
</script>
