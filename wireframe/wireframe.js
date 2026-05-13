const state = {
    role: null,
    currentScreen: "screen-welcome",
    selectedCourtId: 1,
    selectedCoachId: 1,
    selectedAdminCourtId: 1,
    coachDetailBackTarget: "screen-coaches",
    courtDetailBackTarget: "screen-courts",
    selectedDate: "14 Mar",
    selectedTime: "7:00 PM",
    selectedBookingId: null,
    selectedTrainingSessionId: null,
    selectedNotificationId: null,
    bookingBackTarget: "screen-courts",
    sessionRequestBackTarget: "screen-coaches",
    reviewBackTarget: "screen-athlete-dashboard",
    notificationBackTarget: "screen-athlete-dashboard",
    paymentTarget: { type: null, id: null },
    filters: {
        location: "[OPCION]",
        sport: "[OPCION]",
        price: "[OPCION]",
        time: "[OPCION]"
    }
};

const data = {
    accounts: {
        athlete: { email: "sofia@courtly.demo", password: "123456" },
        coach: { email: "lucia@courtly.demo", password: "123456" },
        admin: { email: "admin@courtly.demo", password: "123456" }
    },
    registeredEmails: ["sofia@courtly.demo", "lucia@courtly.demo", "admin@courtly.demo"],
    courts: [
        {
            id: 1,
            name: "[CANCHA 1]",
            location: "[UBICACION 1]",
            sport: "[DEPORTE 1]",
            pricePerHour: 120,
            imageUrl: "assets/arena-norte.png",
            summary: "[SUBTITULO]",
            address: "[SUBTITULO]",
            status: "available",
            slots: ["6:00 PM", "7:00 PM", "8:00 PM"],
            rating: 4.8
        },
        {
            id: 2,
            name: "[CANCHA 2]",
            location: "[UBICACION 2]",
            sport: "[DEPORTE 2]",
            pricePerHour: 95,
            imageUrl: "assets/green-point-club.png",
            summary: "[SUBTITULO]",
            address: "[SUBTITULO]",
            status: "limited",
            slots: ["7:00 PM", "8:00 PM"],
            rating: 4.9
        },
        {
            id: 3,
            name: "[CANCHA 3]",
            location: "[UBICACION 3]",
            sport: "[DEPORTE 3]",
            pricePerHour: 110,
            imageUrl: "assets/bascket.png",
            summary: "[SUBTITULO]",
            address: "[SUBTITULO]",
            status: "available",
            slots: ["5:00 PM", "7:00 PM"],
            rating: 4.6
        },
        {
            id: 4,
            name: "[CANCHA 4]",
            location: "[UBICACION 4]",
            sport: "[DEPORTE 4]",
            pricePerHour: 88,
            imageUrl: "assets/campo-360.png",
            summary: "[SUBTITULO]",
            address: "[SUBTITULO]",
            status: "busy",
            slots: [],
            rating: 4.4
        },
        {
            id: 5,
            name: "[CANCHA 5]",
            location: "[UBICACION 5]",
            sport: "[DEPORTE 5]",
            pricePerHour: 75,
            imageUrl: "assets/match-hub.png",
            summary: "[SUBTITULO]",
            address: "[SUBTITULO]",
            status: "available",
            slots: ["8:00 PM", "9:00 PM"],
            rating: 4.7
        }
    ],
    coaches: [
        {
            id: 1,
            name: "[COACH 1]",
            specialty: "[SUBTITULO]",
            rating: 4.9,
            bio: "[SUBTITULO]",
            imageUrl: "https://tse1.mm.bing.net/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        {
            id: 2,
            name: "[COACH 2]",
            specialty: "[SUBTITULO]",
            rating: 4.8,
            bio: "[SUBTITULO]",
            imageUrl: "https://b2472105.smushcdn.com/2472105/wp-content/uploads/2022/12/Foto-Perfil-Profesional-Cristy-Palacios-dic.-02-2022-1024x1024.jpg?lossy=1&strip=1&webp=1"
        },
        {
            id: 3,
            name: "[COACH 3]",
            specialty: "[SUBTITULO]",
            rating: 4.7,
            bio: "[SUBTITULO]",
            imageUrl: "https://androidayuda.com/wp-content/uploads/2023/01/foto-perfil-1024x683.jpg"
        }
    ],
    availabilities: [
        { id: 101, coachId: 1, date: "18 Mar", time: "8:00 PM", status: "RESERVED" },
        { id: 102, coachId: 1, date: "16 Mar", time: "6:00 PM", status: "AVAILABLE" },
        { id: 103, coachId: 1, date: "13 Mar", time: "8:00 PM", status: "RESERVED" },
        { id: 201, coachId: 2, date: "15 Mar", time: "8:00 AM", status: "AVAILABLE" },
        { id: 202, coachId: 2, date: "16 Mar", time: "10:00 AM", status: "AVAILABLE" },
        { id: 301, coachId: 3, date: "17 Mar", time: "5:00 PM", status: "AVAILABLE" }
    ],
    bookings: [
        {
            id: 5001,
            courtId: 1,
            date: "12 Mar",
            time: "7:00 PM",
            status: "COMPLETED",
            paymentStatus: "PAID",
            receipt: "BK-2026-5001",
            reviewPublished: true
        },
        {
            id: 5002,
            courtId: 2,
            date: "16 Mar",
            time: "8:00 PM",
            status: "PENDING_PAYMENT",
            paymentStatus: "PENDING",
            receipt: null,
            reviewPublished: false
        }
    ],
    trainingSessions: [
        {
            id: 9001,
            coachId: 1,
            courtId: 2,
            availabilityId: 103,
            date: "13 Mar",
            time: "8:00 PM",
            goal: "[SUBTITULO]",
            status: "COMPLETED",
            paymentStatus: "PAID",
            price: 140,
            receipt: "TS-2026-9001",
            playerName: "[NOMBRE]",
            reviewPublished: true
        },
        {
            id: 9002,
            coachId: 1,
            courtId: 1,
            availabilityId: 102,
            date: "16 Mar",
            time: "6:00 PM",
            goal: "[SUBTITULO]",
            status: "PENDING",
            paymentStatus: "PENDING",
            price: 150,
            receipt: null,
            playerName: "[NOMBRE]",
            reviewPublished: false
        },
        {
            id: 9003,
            coachId: 1,
            courtId: 1,
            availabilityId: 101,
            date: "18 Mar",
            time: "8:00 PM",
            goal: "[SUBTITULO]",
            status: "ACCEPTED",
            paymentStatus: "PENDING",
            price: 140,
            receipt: null,
            playerName: "[NOMBRE]",
            reviewPublished: false
        }
    ],
    matches: [
        {
            id: 1,
            title: "[PARTIDO 1]",
            courtId: 1,
            date: "14 Mar",
            time: "9:00 PM",
            capacity: 10,
            participants: ["[USUARIO 1]", "[USUARIO 2]", "[USUARIO 3]"],
            joined: false,
            level: "[SUBTITULO]",
            status: "OPEN"
        },
        {
            id: 2,
            title: "[PARTIDO 2]",
            courtId: 2,
            date: "15 Mar",
            time: "6:00 PM",
            capacity: 4,
            participants: ["[USUARIO 1]", "[USUARIO 2]", "[USUARIO 3]", "[USUARIO 4]"],
            joined: false,
            level: "[SUBTITULO]",
            status: "FULL"
        },
        {
            id: 3,
            title: "[PARTIDO 3]",
            courtId: 3,
            date: "17 Mar",
            time: "5:30 PM",
            capacity: 8,
            participants: ["[USUARIO 1]", "[USUARIO 2]", "[USUARIO 3]", "[USUARIO 4]"],
            joined: true,
            level: "[SUBTITULO]",
            status: "OPEN"
        }
    ],
    notifications: [
        {
            id: 1,
            role: "athlete",
            title: "[TITULO]",
            message: "[SUBTITULO]",
            time: "Hace 2 h",
            detail: "[SUBTITULO]",
            relatedScreen: "screen-rate-court",
            read: false
        },
        {
            id: 2,
            role: "athlete",
            title: "[TITULO]",
            message: "[SUBTITULO]",
            time: "Hace 35 min",
            detail: "[SUBTITULO]",
            relatedScreen: "screen-payment",
            read: false
        },
        {
            id: 3,
            role: "coach",
            title: "[TITULO]",
            message: "[SUBTITULO]",
            time: "Hace 20 min",
            detail: "[SUBTITULO]",
            relatedScreen: "screen-requests",
            read: false
        }
    ],
    courtReviews: [
        {
            id: 1,
            sourceType: "BOOKING",
            sourceId: 5001,
            courtId: 1,
            author: "[NOMBRE]",
            score: 5,
            comment: "[SUBTITULO]"
        }
    ],
    coachReviews: [
        {
            id: 1,
            sourceType: "TRAINING_SESSION",
            sourceId: 9001,
            coachId: 1,
            author: "[NOMBRE]",
            score: 5,
            comment: "[SUBTITULO]"
        }
    ],
    athleteProfile: {
        name: "[NOMBRE]",
        role: "[ROL]",
        email: "sofia@courtly.demo",
        phone: "[SUBTITULO]",
        favoriteSport: "[SUBTITULO]",
        imageUrl: "assets/image.png"
    },
    coachProfile: {
        name: "[NOMBRE]",
        role: "[ROL]",
        email: "lucia@courtly.demo",
        phone: "[SUBTITULO]",
        specialty: "[SUBTITULO]",
        experience: "[SUBTITULO]",
        imageUrl: "https://tse1.mm.bing.net/th/id/OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    adminProfile: {
        name: "[NOMBRE]",
        role: "[ROL]",
        email: "admin@courtly.demo",
        phone: "[SUBTITULO]",
        focus: "[SUBTITULO]",
        imageUrl: "assets/logo-courtly.jpeg"
    },
    iamUsers: [
        { id: 1, username: "sofia@courtly.demo", roles: ["ROLE_USER"] },
        { id: 2, username: "lucia@courtly.demo", roles: ["ROLE_USER", "ROLE_INSTRUCTOR"] },
        { id: 3, username: "admin@courtly.demo", roles: ["ROLE_ADMIN"] }
    ],
    iamRoles: ["ROLE_USER", "ROLE_INSTRUCTOR", "ROLE_ADMIN"],
    bookingDates: ["14 Mar", "15 Mar", "16 Mar", "17 Mar", "18 Mar"]
};

const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("menu");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const notificationsOverlay = document.getElementById("notificationsOverlay");
const notificationsDrawer = document.getElementById("notificationsDrawer");

const svgIcons = {
    home: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 12 15 12 15 21"/></svg>`,
    court: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="2" y1="12" x2="22" y2="12"/></svg>`,
    coach: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/><path d="M19 8h3"/><path d="M20.5 6.5l1.5 3-1.5 3"/></svg>`,
    booking: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    matches: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="2" x2="12" y2="22"/><path d="M4.93 4.93c4.29 4.29 9.85 4.29 14.14 0"/></svg>`,
    profile: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    calendar: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/></svg>`,
    analytics: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    bell: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"/><path d="M9.5 12.5l1.7 1.7 3.3-4.2"/></svg>`,
    lock: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
};

const menuByRole = {
    athlete: [
        { id: "screen-athlete-dashboard", label: "[MENU]", icon: svgIcons.home, center: false },
        { id: "screen-courts", label: "[MENU]", icon: svgIcons.court, center: false },
        { id: "screen-coaches", label: "[MENU]", icon: svgIcons.coach, center: true },
        { id: "screen-matches", label: "[MENU]", icon: svgIcons.matches, center: false },
        { id: "screen-profile", label: "[MENU]", icon: svgIcons.profile, center: false }
    ],
    coach: [
        { id: "screen-coach-dashboard", label: "[MENU]", icon: svgIcons.home, center: false },
        { id: "screen-availability", label: "[MENU]", icon: svgIcons.calendar, center: false },
        { id: "screen-requests", label: "[MENU]", icon: svgIcons.booking, center: true },
        { id: "screen-analytics", label: "[MENU]", icon: svgIcons.analytics, center: false },
        { id: "screen-profile", label: "[MENU]", icon: svgIcons.profile, center: false }
    ],
    admin: [
        { id: "screen-admin-dashboard", label: "[MENU]", icon: svgIcons.home, center: false },
        { id: "screen-admin-courts", label: "[MENU]", icon: svgIcons.court, center: false },
        { id: "screen-iam", label: "[MENU]", icon: svgIcons.shield, center: true },
        { id: "screen-notifications", label: "[MENU]", icon: svgIcons.bell, center: false },
        { id: "screen-profile", label: "[MENU]", icon: svgIcons.profile, center: false }
    ]
};

bindEvents();
seedStaticSelectors();
renderAll();

function bindEvents() {
    document.getElementById("loginButton").addEventListener("click", login);
    document.getElementById("logoutButton").addEventListener("click", resetToWelcome);
    document.getElementById("showLogin").addEventListener("click", () => setAuthMode("login"));
    document.getElementById("showRegister").addEventListener("click", () => setAuthMode("register"));
    document.getElementById("createAccount").addEventListener("click", createAccount);
    document.getElementById("registerRole").addEventListener("change", syncRegisterRoleFields);
    document.getElementById("applyFilters").addEventListener("click", applyCourtFilters);
    document.getElementById("confirmBooking").addEventListener("click", confirmBooking);
    document.getElementById("processPayment").addEventListener("click", processPayment);
    document.getElementById("publishReview").addEventListener("click", publishReview);
    document.getElementById("createMatchButton").addEventListener("click", createMatch);
    document.getElementById("saveAvailability").addEventListener("click", saveAvailability);
    document.getElementById("saveProfile").addEventListener("click", saveProfile);
    document.getElementById("saveAdminCourt").addEventListener("click", saveAdminCourt);
    document.getElementById("createAdminCourt").addEventListener("click", createAdminCourt);
    document.getElementById("deleteAdminCourt").addEventListener("click", deleteAdminCourt);
    document.getElementById("adminCourtSelect").addEventListener("change", syncAdminCourtForm);
    document.getElementById("toggleNotifications").addEventListener("click", toggleNotificationsDrawer);
    document.getElementById("closeNotifications").addEventListener("click", closeNotificationsDrawer);
    document.getElementById("backFromNotificationDetail").addEventListener("click", goBackFromNotificationDetail);
    document.getElementById("backFromCoachDetail").addEventListener("click", () => navigate(state.coachDetailBackTarget || "screen-coaches"));
    document.getElementById("backFromBooking").addEventListener("click", () => navigate(state.bookingBackTarget || "screen-courts"));
    document.getElementById("backFromSessionRequest").addEventListener("click", () => navigate(state.sessionRequestBackTarget || "screen-coaches"));
    document.getElementById("backFromReview").addEventListener("click", () => navigate(state.reviewBackTarget || "screen-athlete-dashboard"));
    document.getElementById("createTrainingSession").addEventListener("click", createTrainingSession);
    document.getElementById("sessionCourtSelect").addEventListener("change", onSessionCourtChange);
    document.getElementById("sessionAvailabilitySelect").addEventListener("change", renderSessionRequestSummary);
    document.getElementById("closeModal").addEventListener("click", closeModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) closeModal();
    });

    notificationsOverlay.addEventListener("click", (event) => {
        if (event.target === notificationsOverlay) closeNotificationsDrawer();
    });

    notificationsDrawer.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

function seedStaticSelectors() {
    fillSelect("locationFilter", ["Todas", ...new Set(data.courts.map((court) => court.location))]);
    fillSelect("sportFilter", ["Todos", ...new Set(data.courts.map((court) => court.sport))]);
    fillSelect("priceFilter", ["Todos", "Hasta S/ 80", "Hasta S/ 100", "Hasta S/ 120"]);
    fillSelect("timeFilter", ["Todos", ...new Set(data.courts.flatMap((court) => court.slots))]);
    fillSelect("matchCourt", data.courts.map((court) => court.name));
    fillSelect("matchDate", data.bookingDates);
    fillSelect("matchTime", ["6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"]);
    fillSelect("sessionCourtSelect", data.courts.filter((court) => court.slots.length).map((court) => `${court.id}|${court.name}`), true);
    fillSelect("adminCourtSelect", data.courts.map((court) => `${court.id}|${court.name}`), true);
    syncRegisterRoleFields();
    syncAdminCourtForm();
}

function fillSelect(id, values, splitLabel = false) {
    const select = document.getElementById(id);
    if (!select) return;
    select.innerHTML = values.map((value) => {
        const optionValue = splitLabel ? value.split("|")[0] : value;
        const label = splitLabel ? value.split("|")[1] : value;
        return `<option value="${optionValue}">${label}</option>`;
    }).join("");
}

function login() {
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value.trim();
    const feedback = document.getElementById("loginFeedback");

    if (!email || !password) {
        setFeedback(feedback, "Completa correo y contrasena para continuar.", "error");
        return;
    }

    const matchedRole = Object.entries(data.accounts).find(([, account]) => {
        return account.email === email && account.password === password;
    })?.[0];

    if (!matchedRole) {
        setFeedback(feedback, "Credenciales invalidas. La sesion no fue iniciada.", "error");
        return;
    }

    setFeedback(feedback, "Sesion iniciada correctamente. El mockup carga el flujo segun el rol.", "success");
    enterAs(matchedRole);
}

function createAccount() {
    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim().toLowerCase();
    const password = document.getElementById("registerPassword").value.trim();
    const role = document.getElementById("registerRole").value;
    const specialty = document.getElementById("registerSpecialty").value.trim();
    const experience = document.getElementById("registerExperience").value.trim();
    const feedback = document.getElementById("registerFeedback");

    if (!name || !email || !password) {
        setFeedback(feedback, "Faltan campos obligatorios. No se puede crear la cuenta.", "error");
        return;
    }

    if (data.registeredEmails.includes(email)) {
        setFeedback(feedback, "El correo ya esta en uso. Debes registrar uno distinto.", "error");
        return;
    }

    if (role === "coach" && (!specialty || !experience)) {
        setFeedback(feedback, "Completa especialidad y experiencia del entrenador.", "error");
        return;
    }

    data.registeredEmails.push(email);
    data.accounts[role] = { email, password };
    const rolesByAccount = {
        athlete: ["ROLE_USER"],
        coach: ["ROLE_USER", "ROLE_INSTRUCTOR"],
        admin: ["ROLE_ADMIN"]
    };
    data.iamUsers.push({
        id: Date.now(),
        username: email,
        roles: rolesByAccount[role]
    });

    if (role === "athlete") {
        data.athleteProfile = { ...data.athleteProfile, name, email };
    } else if (role === "coach") {
        data.coachProfile = { ...data.coachProfile, name, email, specialty, experience };
    } else {
        data.adminProfile = { ...data.adminProfile, name, email };
    }

    setFeedback(feedback, "Cuenta creada. El mockup te lleva al flujo del rol seleccionado.", "success");
    enterAs(role);
}

function syncRegisterRoleFields() {
    const isCoach = document.getElementById("registerRole").value === "coach";
    document.getElementById("coachRegisterFields").classList.toggle("hidden", !isCoach);
}

function enterAs(role) {
    state.role = role;
    sidebar.classList.remove("hidden");
    renderMenu();
    renderAll();
    const homeByRole = {
        athlete: "screen-athlete-dashboard",
        coach: "screen-coach-dashboard",
        admin: "screen-admin-dashboard"
    };
    navigate(homeByRole[role] || "screen-welcome");
}

function resetToWelcome() {
    state.role = null;
    state.currentScreen = "screen-welcome";
    closeNotificationsDrawer(false);
    sidebar.classList.add("hidden");
    setAuthMode("login");
    navigate("screen-welcome");
}

function setAuthMode(mode) {
    const isLogin = mode === "login";
    document.getElementById("showLogin").classList.toggle("active", isLogin);
    document.getElementById("showRegister").classList.toggle("active", !isLogin);
    document.getElementById("loginPanel").classList.toggle("active", isLogin);
    document.getElementById("registerPanel").classList.toggle("active", !isLogin);
}

function renderMenu() {
    const items = menuByRole[state.role] || [];
    menu.innerHTML = items.map((item) => `
        <button class="menu-button ${item.center ? "center-item" : ""}" data-nav-target="${item.id}">
            <span class="menu-icon">${item.icon}</span>
            <span class="menu-label">${item.label}</span>
        </button>
    `).join("");
    bindStaticNavButtons();
    syncMenuState();
}

function navigate(screenId) {
    document.querySelectorAll(".screen").forEach((screen) => {
        screen.classList.toggle("active", screen.id === screenId);
    });
    state.currentScreen = screenId;
    if (screenId !== "screen-athlete-dashboard" && screenId !== "screen-notifications") {
        closeNotificationsDrawer(false);
    }
    syncMenuState();
}

function syncMenuState() {
    menu.querySelectorAll(".menu-button").forEach((button) => {
        button.classList.toggle("active", button.dataset.navTarget === state.currentScreen);
    });
}

function renderAll() {
    renderAthleteOverview();
    renderAthleteOperations();
    renderNextAction();
    renderAthleteRecommendations();
    renderCourts();
    renderCourtDetail();
    renderBookingSelectors();
    renderBookingSummary();
    renderBookingsManager();
    renderCoaches();
    renderCoachDetail();
    renderSessionRequestSelectors();
    renderSessionRequestSummary();
    renderPaymentSummary();
    renderAthletePaymentsPreview();
    renderAthletePaymentsDetail();
    renderReviewSelector();
    renderCourtReviews();
    renderMatches();
    renderNotifications();
    renderNotificationsDrawer();
    renderNotificationHistory();
    renderNotificationDetail();
    renderCoachOverview();
    renderAvailabilitySummary();
    renderAvailabilityDetail();
    renderRequestsPreview();
    renderRequestsManager();
    renderPaymentsPreview();
    renderPaymentsDetail();
    renderMetrics();
    renderCoachReviews();
    renderAdminOverview();
    renderAdminCourts();
    renderIamViews();
    renderProfile();
    bindStaticNavButtons();
    normalizeVisibleCopy();
}

function renderAthleteOverview() {
    const pendingPayments = getPendingPayments().length;
    const activeOperations = getAthleteOperations().filter((operation) => {
        return !["COMPLETED", "CANCELLED", "REJECTED"].includes(operation.status);
    }).length;

    document.getElementById("athleteGreeting").textContent = `Hola, ${data.athleteProfile.name.split(" ")[0]}`;
    document.getElementById("notificationsBell").innerHTML = svgIcons.bell;
    document.getElementById("notificationBadge").textContent = getVisibleNotifications().filter((item) => !item.read).length.toString();

    const stats = [
        { label: "Operaciones activas", value: String(activeOperations), icon: "assets/reservas.png" },
        { label: "Pagos pendientes", value: String(pendingPayments), icon: "assets/notificaciones.png" },
        { label: "Sesiones completadas", value: String(data.trainingSessions.filter((session) => session.status === "COMPLETED").length), icon: "assets/reseña.png" },
        { label: "Partidos abiertos", value: String(data.matches.filter((match) => match.status === "OPEN").length), icon: "assets/partidos.png" }
    ];

    document.getElementById("athleteOverview").innerHTML = stats.map(statCardTemplate).join("");
}

function renderAthleteOperations() {
    const operations = getAthleteOperations();
    document.getElementById("nextBookings").innerHTML = `
        <div class="booking-premium-list">
            ${operations.map((operation) => `
                <article class="booking-premium-item">
                    <div class="booking-premium-main">
                        <div class="booking-premium-title">
                            <strong>${operation.title}</strong>
                            <span class="status-pill ${statusClass(operation.status)}">${humanizeStatus(operation.status)}</span>
                        </div>
                        <p>${operation.subtitle}</p>
                        <div class="booking-premium-meta">
                            <span>${operation.kind}</span>
                            <span>${operation.amount}</span>
                        </div>
                    </div>
                </article>
            `).join("")}
        </div>
    `;
}

function renderNextAction() {
    const pendingPayment = getPendingPayments()[0];
    const nextAcceptedSession = data.trainingSessions.find((session) => {
        return session.status === "ACCEPTED" && session.paymentStatus === "PENDING";
    });

    let content = `
        <p class="empty-copy">No tienes acciones urgentes. Puedes reservar una cancha o pedir una nueva sesion.</p>
    `;

    if (pendingPayment) {
        content = `
            <div class="feature-reservation-card">
                <div class="feature-reservation-topbar">
                    <span class="feature-kicker">Pendiente</span>
                    <span class="status-pill muted">Pago requerido</span>
                </div>
                <div class="feature-reservation-head">
                    <h3>${pendingPayment.title}</h3>
                    <p class="feature-reservation-copy">${pendingPayment.copy}</p>
                </div>
                <div class="feature-reservation-grid">
                    <div class="feature-data-chip"><span>Fecha</span><strong>${pendingPayment.date}</strong></div>
                    <div class="feature-data-chip"><span>Total</span><strong>${pendingPayment.amount}</strong></div>
                </div>
                <div class="feature-reservation-actions">
                    <button class="primary-button feature-cta" id="nextPaymentAction">Ir a pagar</button>
                </div>
            </div>
        `;
    } else if (nextAcceptedSession) {
        const coach = getCoach(nextAcceptedSession.coachId);
        content = `
            <div class="summary-box">
                <div class="summary-line"><span>Siguiente training session</span><strong>${coach.name}</strong></div>
                <div class="summary-line"><span>Fecha</span><strong>${nextAcceptedSession.date} - ${nextAcceptedSession.time}</strong></div>
                <div class="summary-line"><span>Estado</span><strong>${humanizeStatus(nextAcceptedSession.status)}</strong></div>
            </div>
        `;
    }

    document.getElementById("nextReservationHighlight").innerHTML = content;

    const button = document.getElementById("nextPaymentAction");
    if (button && pendingPayment) {
        button.addEventListener("click", () => {
            state.paymentTarget = { type: pendingPayment.type, id: pendingPayment.id };
            state.bookingBackTarget = "screen-athlete-dashboard";
            renderPaymentSummary();
            navigate("screen-payment");
        });
    }
}

function renderAthleteRecommendations() {
    const recommendations = data.courts.filter((court) => court.status !== "busy").slice(0, 3);
    document.getElementById("athleteRecommendations").innerHTML = recommendations.map((court) => `
        <article class="mini-reco-card">
            <div class="mini-reco-top">
                <h4>${court.name}</h4>
                <span class="mini-reco-price">${formatMoney(court.pricePerHour)}</span>
            </div>
            <p>${court.location} · ${court.sport}</p>
            <p>${court.summary}</p>
            <div class="mini-reco-footer">
                <span class="status-pill ${statusClass(court.status === "busy" ? "CANCELLED" : court.status === "limited" ? "PENDING" : "CONFIRMED")}">${humanizeCourtStatus(court.status)}</span>
                <button class="text-button" data-court-detail="${court.id}">Ver detalle</button>
            </div>
        </article>
    `).join("");

    document.querySelectorAll("[data-court-detail]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedCourtId = Number(button.dataset.courtDetail);
            state.courtDetailBackTarget = "screen-athlete-dashboard";
            renderCourtDetail();
            navigate("screen-court-detail");
        });
    });
}

function applyCourtFilters() {
    state.filters.location = document.getElementById("locationFilter").value;
    state.filters.sport = document.getElementById("sportFilter").value;
    state.filters.price = document.getElementById("priceFilter").value;
    state.filters.time = document.getElementById("timeFilter").value;
    renderCourts();
}

function renderCourts() {
    const results = data.courts.filter((court) => {
        const matchesLocation = state.filters.location === "Todas" || court.location === state.filters.location;
        const matchesSport = state.filters.sport === "Todos" || court.sport === state.filters.sport;
        const matchesPrice = state.filters.price === "Todos" || court.pricePerHour <= Number(state.filters.price.match(/\d+/)?.[0] || 999);
        const matchesTime = state.filters.time === "Todos" || court.slots.includes(state.filters.time);
        return matchesLocation && matchesSport && matchesPrice && matchesTime;
    });

    const feedback = document.getElementById("courtSearchFeedback");
    if (!results.length) {
        setFeedback(feedback, "No hay canchas que cumplan con esos filtros.", "warning");
    } else {
        clearFeedback(feedback);
    }

    document.getElementById("courtsGrid").innerHTML = results.map((court) => `
        <article class="court-card">
            <div class="court-card-visual">
                <img class="court-thumb" src="${court.imageUrl}" alt="${court.name}">
            </div>
            <div class="card-body">
                <div class="card-headline">
                    <div>
                        <p class="eyebrow">${court.location}</p>
                        <h3>${court.name}</h3>
                    </div>
                    <span class="status-pill ${statusClass(court.status === "busy" ? "CANCELLED" : court.status === "limited" ? "PENDING" : "CONFIRMED")}">${humanizeCourtStatus(court.status)}</span>
                </div>
                <p>${court.sport} · ${court.slots.length ? `${court.slots.length} horarios` : "Sin horarios libres"}</p>
                <p class="card-price">${formatMoney(court.pricePerHour)}<small>/ hora</small></p>
                <div class="action-row">
                    <button class="court-action secondary-action" data-open-court="${court.id}">Ver detalle</button>
                    <button class="court-action" data-book-court="${court.id}" ${court.slots.length ? "" : "disabled"}>Reservar</button>
                </div>
            </div>
        </article>
    `).join("");

    document.querySelectorAll("[data-open-court]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedCourtId = Number(button.dataset.openCourt);
            state.courtDetailBackTarget = "screen-courts";
            renderCourtDetail();
            navigate("screen-court-detail");
        });
    });

    document.querySelectorAll("[data-book-court]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedCourtId = Number(button.dataset.bookCourt);
            state.bookingBackTarget = "screen-courts";
            syncBookingSelection();
            renderBookingSelectors();
            renderBookingSummary();
            navigate("screen-booking");
        });
    });
}

function renderCourtDetail() {
    const court = getSelectedCourt();
    const playerReviews = data.courtReviews.filter((review) => review.courtId === court.id);
    const coachReviews = data.trainingSessions
        .filter((session) => session.courtId === court.id && session.status === "COMPLETED")
        .map((session) => {
            const coach = getCoach(session.coachId);
            return {
                author: coach.name,
                comment: `Uso la cancha ${court.name} para sesiones tecnicas con resultados consistentes.`,
                score: 5
            };
        });

    document.getElementById("courtDetailContent").innerHTML = `
        <div class="court-detail-hero-stage">
            <div class="court-detail-topbar">
                <button class="court-detail-nav" id="backFromCourtDetail" aria-label="Regresar">←</button>
            </div>
            <img class="court-detail-image" src="${court.imageUrl}" alt="${court.name}">
        </div>
        <div class="court-detail-content-sheet">
            <button class="back-link court-detail-back" id="backFromCourtDetail">← Regresar</button>
            <div class="court-detail-hero-copy">
                <p class="eyebrow">${court.location} · ${court.sport}</p>
                <h3>${court.name}</h3>
                <p>${court.summary}</p>
            </div>
            <div class="court-detail-stats">
                <div class="field-box soft-box"><span>Precio por hora</span><strong>${formatMoney(court.pricePerHour)}</strong></div>
                <div class="field-box soft-box"><span>Horarios libres</span><strong>${court.slots.length || "0"}</strong></div>
            </div>
            <div class="court-detail-copy">
                <h4>Direccion</h4>
                <p>${court.address}</p>
            </div>
            <div class="court-detail-sticky-bar">
                <button class="primary-button court-detail-primary" id="detailBookCourtButtonTop">Reservar esta cancha</button>
            </div>
            <div class="court-detail-section">
                <div class="court-review-header">
                    <h4>Resenas reales</h4>
                    <div class="court-review-tabs">
                        <span class="review-tab active">Jugadores</span>
                        <span class="review-tab">Coaches</span>
                    </div>
                </div>
                <div class="review-group">
                    ${playerReviews.map((review) => reviewCardTemplate(review.author, "Jugador", review.score, review.comment)).join("") || `<p class="empty-copy">Aun no hay resenas de jugadores.</p>`}
                </div>
                <div class="review-group review-group-secondary">
                    ${coachReviews.map((review) => reviewCardTemplate(review.author, "Coach", review.score, review.comment, true)).join("") || `<p class="empty-copy">Aun no hay comentarios de sesiones con coach.</p>`}
                </div>
            </div>
            <div class="court-detail-sticky-bar">
                <button class="primary-button court-detail-primary" id="detailBookCourtButton">Reservar esta cancha</button>
            </div>
        </div>
    `;

    document.getElementById("backFromCourtDetail").addEventListener("click", () => {
        navigate(state.courtDetailBackTarget || "screen-courts");
    });

    const courtDetailBookingButtons = ["detailBookCourtButtonTop", "detailBookCourtButton"]
        .map((id) => document.getElementById(id))
        .filter(Boolean);

    courtDetailBookingButtons.forEach((button) => button.addEventListener("click", () => {
        state.bookingBackTarget = "screen-court-detail";
        syncBookingSelection();
        renderBookingSelectors();
        renderBookingSummary();
        navigate("screen-booking");
    }));
}

function syncBookingSelection() {
    const court = getSelectedCourt();
    state.selectedDate = data.bookingDates[0];
    state.selectedTime = court.slots[0] || "7:00 PM";
}

function renderBookingSelectors() {
    const court = getSelectedCourt();
    const dateOptions = document.getElementById("dateOptions");
    const timeOptions = document.getElementById("timeOptions");

    dateOptions.innerHTML = data.bookingDates.map((date) => `
        <button class="chip ${state.selectedDate === date ? "active" : ""}" data-booking-date="${date}">${date}</button>
    `).join("");

    timeOptions.innerHTML = court.slots.length ? court.slots.map((time) => `
        <button class="chip ${state.selectedTime === time ? "active" : ""}" data-booking-time="${time}">${time}</button>
    `).join("") : `<p class="empty-copy">Esta cancha no tiene horarios libres en el mockup.</p>`;

    document.querySelectorAll("[data-booking-date]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedDate = button.dataset.bookingDate;
            renderBookingSelectors();
            renderBookingSummary();
        });
    });

    document.querySelectorAll("[data-booking-time]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedTime = button.dataset.bookingTime;
            renderBookingSelectors();
            renderBookingSummary();
        });
    });
}

function renderBookingSummary() {
    const court = getSelectedCourt();
    document.getElementById("bookingSummary").innerHTML = `
        <div class="summary-box">
            <div class="summary-line"><span>Cancha</span><strong>${court.name}</strong></div>
            <div class="summary-line"><span>Ubicacion</span><strong>${court.location}</strong></div>
            <div class="summary-line"><span>Fecha</span><strong>${state.selectedDate}</strong></div>
            <div class="summary-line"><span>Horario</span><strong>${state.selectedTime}</strong></div>
            <div class="summary-line"><span>Total calculado</span><strong>${formatMoney(court.pricePerHour)}</strong></div>
        </div>
    `;
}

function confirmBooking() {
    const court = getSelectedCourt();
    const feedback = document.getElementById("bookingFeedback");

    if (!court.slots.includes(state.selectedTime)) {
        setFeedback(feedback, "Ese horario ya no esta libre. Selecciona otro slot.", "error");
        return;
    }

    const booking = {
        id: Date.now(),
        courtId: court.id,
        date: state.selectedDate,
        time: state.selectedTime,
        status: "PENDING_PAYMENT",
        paymentStatus: "PENDING",
        receipt: null,
        reviewPublished: false
    };

    court.slots = court.slots.filter((slot) => slot !== state.selectedTime);
    court.status = court.slots.length ? "limited" : "busy";
    data.bookings.unshift(booking);
    state.selectedBookingId = booking.id;
    state.paymentTarget = { type: "BOOKING", id: booking.id };
    createNotification("athlete", "Booking creado", `Tu booking en ${court.name} quedo pendiente de pago.`, "Ahora", `El booking simple fue creado correctamente y ahora espera pago para pasar a CONFIRMED.`, "screen-payment");
    setFeedback(feedback, "Booking creado. Ahora el siguiente paso logico es pagar la operacion.", "success");
    renderAll();
    navigate("screen-payment");
}

function renderBookingsManager() {
    const operations = getAthleteOperations();
    document.getElementById("bookingsManager").innerHTML = `
        <div class="list-stack">
            ${operations.map((operation) => `
                <div class="list-item">
                    <div>
                        <strong>${operation.title}</strong>
                        <p>${operation.subtitle}</p>
                    </div>
                    <div class="action-group">
                        ${operation.paymentPending ? `<button class="small-button" data-pay-operation="${operation.type}|${operation.id}">Pagar</button>` : operation.receipt ? `<button class="small-button" data-open-receipt="${operation.type}|${operation.id}">Comprobante</button>` : ""}
                        ${operation.cancelable ? `<button class="small-button secondary" data-cancel-operation="${operation.type}|${operation.id}">Cancelar</button>` : ""}
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    document.querySelectorAll("[data-pay-operation]").forEach((button) => {
        button.addEventListener("click", () => {
            const [type, id] = button.dataset.payOperation.split("|");
            state.paymentTarget = { type, id: Number(id) };
            renderPaymentSummary();
            navigate("screen-payment");
        });
    });

    document.querySelectorAll("[data-cancel-operation]").forEach((button) => {
        button.addEventListener("click", () => {
            const [type, id] = button.dataset.cancelOperation.split("|");
            if (type === "BOOKING") cancelBooking(Number(id));
            if (type === "TRAINING_SESSION") cancelTrainingSession(Number(id));
        });
    });

    document.querySelectorAll("[data-open-receipt]").forEach((button) => {
        button.addEventListener("click", () => {
            const [type, id] = button.dataset.openReceipt.split("|");
            const operation = type === "BOOKING" ? getBooking(Number(id)) : getTrainingSession(Number(id));
            showModal(`
                <div class="modal-body">
                    <div class="success-mark">OK</div>
                    <div>
                        <p class="eyebrow">Comprobante</p>
                        <h3>${operation.receipt}</h3>
                    </div>
                    <p>Operacion ${type === "BOOKING" ? "simple" : "con coach"} con estado ${humanizeStatus(operation.status)} y pago ${humanizeStatus(operation.paymentStatus)}.</p>
                    <button class="primary-button full-width" onclick="window.closeModalFromAction()">Cerrar</button>
                </div>
            `);
        });
    });
}

function cancelBooking(bookingId) {
    const booking = getBooking(bookingId);
    const feedback = document.getElementById("bookingFeedback");

    if (!booking || ["COMPLETED", "CANCELLED"].includes(booking.status)) {
        setFeedback(feedback, "Ese booking ya no puede cancelarse.", "error");
        return;
    }

    booking.status = "CANCELLED";
    booking.paymentStatus = booking.paymentStatus === "PAID" ? "PAID" : "VOID";
    const court = getCourt(booking.courtId);
    if (court && !court.slots.includes(booking.time)) {
        court.slots.push(booking.time);
        court.slots.sort();
        court.status = "available";
    }

    createNotification("athlete", "Booking cancelado", `${court.name} libero el horario ${booking.time}.`, "Ahora", `La cancelacion del booking fue exitosa y el horario volvio a quedar disponible.`, "screen-booking");
    setFeedback(feedback, "Booking cancelado y horario liberado.", "success");
    renderAll();
    navigate("screen-booking");
}

function renderCoaches() {
    document.getElementById("coachesGrid").innerHTML = data.coaches.map((coach) => {
        const availableSlots = getCoachAvailabilities(coach.id).filter((item) => item.status === "AVAILABLE");
        return `
            <article class="coach-card">
                <div class="coach-card-visual">
                    <img class="coach-thumb" src="${coach.imageUrl}" alt="${coach.name}">
                    <span class="coach-rating-chip">${coach.rating.toFixed(1)}/5</span>
                </div>
                <div class="card-body">
                    <div class="coach-card-heading">
                        <h3>${coach.name}</h3>
                        <p>${coach.specialty}</p>
                    </div>
                    <p>${coach.bio}</p>
                    <div class="badge-row">
                        <span class="badge available">${availableSlots.length} slots disponibles</span>
                    </div>
                    <div class="action-row">
                        <button class="court-action secondary-action" data-coach-detail="${coach.id}">Ver perfil</button>
                        <button class="court-action" data-open-coach="${coach.id}">Reservar slot</button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    document.querySelectorAll("[data-open-coach]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedCoachId = Number(button.dataset.openCoach);
            state.sessionRequestBackTarget = "screen-coaches";
            renderSessionRequestSelectors();
            renderSessionRequestSummary();
            navigate("screen-session-request");
        });
    });

    document.querySelectorAll("[data-coach-detail]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedCoachId = Number(button.dataset.coachDetail);
            state.coachDetailBackTarget = "screen-coaches";
            renderCoachDetail();
            navigate("screen-coach-detail");
        });
    });
}

function renderCoachDetail() {
    const coach = getCoach(state.selectedCoachId);
    if (!coach) {
        document.getElementById("coachDetailContent").innerHTML = `<p class="empty-copy">Selecciona un coach para ver su perfil.</p>`;
        return;
    }

    const availabilities = getCoachAvailabilities(coach.id);
    const reviews = data.coachReviews.filter((review) => review.coachId === coach.id);
    const completedSessions = data.trainingSessions.filter((session) => session.coachId === coach.id && session.status === "COMPLETED").length;

    document.getElementById("coachDetailContent").innerHTML = `
        <div class="profile-card coach-detail-card">
            <div class="profile-header">
                <div>
                    <p class="eyebrow">Coach verificado</p>
                    <h3>${coach.name}</h3>
                </div>
                <img class="avatar avatar-image" src="${coach.imageUrl}" alt="${coach.name}">
            </div>
            <div class="profile-fields">
                <div class="field-box"><span>Especialidad</span><strong>${coach.specialty}</strong></div>
                <div class="field-box"><span>Rating</span><strong>${coach.rating.toFixed(1)}/5</strong></div>
                <div class="field-box"><span>Sesiones completadas</span><strong>${completedSessions}</strong></div>
                <div class="field-box"><span>Bio</span><strong>${coach.bio}</strong></div>
            </div>
        </div>
        <div class="panel">
            <div class="panel-header">
                <h3>Disponibilidad publicada</h3>
            </div>
            <div class="list-stack">
                ${availabilities.map((item) => `
                    <div class="list-item">
                        <div>
                            <strong>${item.date}</strong>
                            <p>${item.time}</p>
                        </div>
                        <span class="status-pill ${item.status === "AVAILABLE" ? "online" : "muted"}">${item.status}</span>
                    </div>
                `).join("") || `<p class="empty-copy">Aun no hay disponibilidad visible.</p>`}
            </div>
        </div>
        <div class="panel">
            <div class="panel-header">
                <h3>Reseñas validas</h3>
                <button class="text-button" id="goToReviewRules">Escribir reseña</button>
            </div>
            <div class="list-stack">
                ${reviews.map((review) => `
                    <div class="list-item">
                        <div>
                            <strong>${review.author}</strong>
                            <p>${review.comment}</p>
                        </div>
                        <span class="status-pill online">${review.score}/5</span>
                    </div>
                `).join("") || `<p class="empty-copy">Aun no hay reseñas publicadas para este coach.</p>`}
            </div>
        </div>
        <div class="panel">
            <div class="action-row">
                <button class="court-action secondary-action" id="coachDetailReviewButton">Ver si puedo reseñar</button>
                <button class="court-action" id="coachDetailReserveButton">Reservar disponibilidad</button>
            </div>
        </div>
    `;

    document.getElementById("coachDetailReserveButton").addEventListener("click", () => {
        state.sessionRequestBackTarget = "screen-coach-detail";
        renderSessionRequestSelectors();
        renderSessionRequestSummary();
        navigate("screen-session-request");
    });

    document.getElementById("coachDetailReviewButton").addEventListener("click", () => {
        state.reviewBackTarget = "screen-coach-detail";
        navigate("screen-rate-court");
    });

    document.getElementById("goToReviewRules").addEventListener("click", () => {
        state.reviewBackTarget = "screen-coach-detail";
        navigate("screen-rate-court");
    });
}

function renderSessionRequestSelectors() {
    const courts = data.courts.filter((court) => court.slots.length);
    const availableCourts = courts.map((court) => `<option value="${court.id}">${court.name} · ${formatMoney(court.pricePerHour)}</option>`).join("");
    document.getElementById("sessionCourtSelect").innerHTML = availableCourts || `<option value="">Sin canchas disponibles</option>`;

    if (!courts.some((court) => court.id === Number(document.getElementById("sessionCourtSelect").value))) {
        document.getElementById("sessionCourtSelect").value = courts[0]?.id || "";
    }

    const availabilityOptions = getCoachAvailabilities(state.selectedCoachId)
        .filter((item) => item.status === "AVAILABLE")
        .map((item) => `<option value="${item.id}">${item.date} · ${item.time}</option>`)
        .join("");

    document.getElementById("sessionAvailabilitySelect").innerHTML = availabilityOptions || `<option value="">Sin disponibilidad libre</option>`;
}

function onSessionCourtChange() {
    renderSessionRequestSummary();
}

function renderSessionRequestSummary() {
    const coach = getCoach(state.selectedCoachId);
    const selectedCourt = getCourt(Number(document.getElementById("sessionCourtSelect").value || state.selectedCourtId));
    const availability = getAvailability(Number(document.getElementById("sessionAvailabilitySelect").value));
    const sessionPrice = selectedCourt ? selectedCourt.pricePerHour + 45 : 0;

    document.getElementById("sessionRequestSummary").innerHTML = `
        <div class="summary-box">
            <div class="summary-line"><span>Coach</span><strong>${coach.name}</strong></div>
            <div class="summary-line"><span>Especialidad</span><strong>${coach.specialty}</strong></div>
            <div class="summary-line"><span>Cancha</span><strong>${selectedCourt ? selectedCourt.name : "Selecciona una cancha"}</strong></div>
            <div class="summary-line"><span>Disponibilidad</span><strong>${availability ? `${availability.date} - ${availability.time}` : "Sin slot disponible"}</strong></div>
            <div class="summary-line"><span>Precio estimado</span><strong>${sessionPrice ? formatMoney(sessionPrice) : "-"}</strong></div>
        </div>
    `;
}

function createTrainingSession() {
    const availabilityId = Number(document.getElementById("sessionAvailabilitySelect").value);
    const courtId = Number(document.getElementById("sessionCourtSelect").value);
    const goal = document.getElementById("sessionGoal").value.trim();
    const feedback = document.getElementById("sessionRequestFeedback");
    const coach = getCoach(state.selectedCoachId);
    const availability = getAvailability(availabilityId);
    const court = getCourt(courtId);

    if (!availability || availability.status !== "AVAILABLE" || !court || !goal) {
        setFeedback(feedback, "Debes elegir una cancha, un slot disponible y un objetivo valido.", "error");
        return;
    }

    const newSession = {
        id: Date.now(),
        coachId: coach.id,
        courtId: court.id,
        availabilityId: availability.id,
        date: availability.date,
        time: availability.time,
        goal,
        status: "PENDING",
        paymentStatus: "PENDING",
        price: court.pricePerHour + 45,
        receipt: null,
        playerName: data.athleteProfile.name,
        reviewPublished: false
    };

    data.trainingSessions.unshift(newSession);
    state.selectedTrainingSessionId = newSession.id;
    createNotification("athlete", "Solicitud enviada", `La sesion con ${coach.name} quedo en estado PENDING.`, "Ahora", `La training session se creo con coach, cancha, disponibilidad y objetivo. Ahora depende de la respuesta del entrenador.`, "screen-athlete-dashboard");
    createNotification("coach", "Nueva solicitud recibida", `${data.athleteProfile.name} solicito una sesion con ${court.name}.`, "Ahora", `La solicitud incluye disponibilidad ${availability.date} ${availability.time} y espera tu decision.`, "screen-requests");
    setFeedback(feedback, "Solicitud creada. El coach debe aceptarla o rechazarla antes del pago.", "success");
    renderAll();
    navigate("screen-athlete-dashboard");
}

function renderPaymentSummary() {
    const target = resolvePaymentTarget();
    const container = document.getElementById("paymentSummary");

    if (!target) {
        container.innerHTML = `<p class="empty-copy">No hay operaciones pendientes de pago por ahora.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="summary-box">
            <div class="summary-line"><span>Operacion</span><strong>${target.title}</strong></div>
            <div class="summary-line"><span>Contexto</span><strong>${target.copy}</strong></div>
            <div class="summary-line"><span>Estado</span><strong>${humanizeStatus(target.status)}</strong></div>
            <div class="summary-line"><span>Total calculado por backend</span><strong>${target.amount}</strong></div>
        </div>
    `;
}

function processPayment() {
    const target = resolvePaymentTarget();
    const feedback = document.getElementById("paymentFeedback");
    const method = document.getElementById("paymentMethod").value;

    if (!target) {
        setFeedback(feedback, "No hay ninguna operacion pendiente de pago.", "warning");
        return;
    }

    if (method === "declined") {
        setFeedback(feedback, "Pago rechazado. La operacion sigue pendiente.", "error");
        return;
    }

    if (target.type === "BOOKING") {
        const booking = getBooking(target.id);
        booking.paymentStatus = "PAID";
        booking.status = "CONFIRMED";
        booking.receipt = `BK-${new Date().getFullYear()}-${String(booking.id).slice(-4)}`;
        createNotification("athlete", "Pago confirmado", `Tu booking en ${target.title} paso a CONFIRMED.`, "Ahora", `El pago del booking fue aprobado y se genero el comprobante ${booking.receipt}.`, "screen-booking");
    }

    if (target.type === "TRAINING_SESSION") {
        const session = getTrainingSession(target.id);
        if (session.status !== "ACCEPTED") {
            setFeedback(feedback, "Solo se paga una training session cuando ya fue ACCEPTED.", "error");
            return;
        }
        session.paymentStatus = "PAID";
        session.receipt = `TS-${new Date().getFullYear()}-${String(session.id).slice(-4)}`;
        createNotification("athlete", "Pago de training session", `La sesion con ${getCoach(session.coachId).name} ya esta pagada.`, "Ahora", `El pago fue aprobado y ahora la sesion puede completarse cuando termine el servicio.`, "screen-athlete-dashboard");
        createNotification("coach", "Sesion pagada", `${data.athleteProfile.name} completo el pago de la sesion.`, "Ahora", `La training session aceptada ya tiene pago aprobado y queda lista para ejecutarse.`, "screen-requests");
    }

    state.paymentTarget = { type: null, id: null };
    clearFeedback(feedback);
    setFeedback(feedback, "Pago aprobado. El mockup actualizo el estado real de la operacion.", "success");
    renderAll();
}

function renderReviewSelector() {
    const eligibleBookings = data.bookings.filter((booking) => booking.status === "COMPLETED" && !booking.reviewPublished);
    const eligibleSessions = data.trainingSessions.filter((session) => session.status === "COMPLETED" && !session.reviewPublished);
    const options = [
        `<option value="none">Selecciona una operacion</option>`,
        ...eligibleBookings.map((booking) => `<option value="BOOKING|${booking.id}">Booking · ${getCourt(booking.courtId).name} · ${booking.date}</option>`),
        ...eligibleSessions.map((session) => `<option value="TRAINING_SESSION|${session.id}">Training session · ${getCoach(session.coachId).name} · ${session.date}</option>`)
    ];
    document.getElementById("reviewBookingSelect").innerHTML = options.join("");
}

function publishReview() {
    const selected = document.getElementById("reviewBookingSelect").value;
    const score = Number(document.getElementById("reviewScore").value);
    const comment = document.getElementById("reviewComment").value.trim();
    const feedback = document.getElementById("reviewFeedback");

    if (selected === "none" || !comment) {
        setFeedback(feedback, "Selecciona una operacion completada y escribe un comentario.", "error");
        return;
    }

    const [type, idText] = selected.split("|");
    const id = Number(idText);

    if (type === "BOOKING") {
        const booking = getBooking(id);
        booking.reviewPublished = true;
        data.courtReviews.unshift({
            id: Date.now(),
            sourceType: type,
            sourceId: id,
            courtId: booking.courtId,
            author: data.athleteProfile.name,
            score,
            comment
        });
    }

    if (type === "TRAINING_SESSION") {
        const session = getTrainingSession(id);
        session.reviewPublished = true;
        data.coachReviews.unshift({
            id: Date.now(),
            sourceType: type,
            sourceId: id,
            coachId: session.coachId,
            author: data.athleteProfile.name,
            score,
            comment
        });
        createNotification("coach", "Nueva resena recibida", `${data.athleteProfile.name} publico una resena de la sesion completada.`, "Ahora", `La review del coach ya forma parte del historial y del analytics derivado.`, "screen-reviews");
    }

    setFeedback(feedback, "Resena publicada desde una operacion completada.", "success");
    renderAll();
}

function renderCourtReviews() {
    const items = [
        ...data.courtReviews.map((review) => {
            const court = getCourt(review.courtId);
            return `
                <div class="list-item">
                    <div>
                        <strong>${court.name}</strong>
                        <p>${review.author}: ${review.comment}</p>
                    </div>
                    <span class="status-pill online">${review.score}/5</span>
                </div>
            `;
        }),
        ...data.coachReviews.slice(0, 2).map((review) => {
            const coach = getCoach(review.coachId);
            return `
                <div class="list-item">
                    <div>
                        <strong>${coach.name}</strong>
                        <p>${review.author}: ${review.comment}</p>
                    </div>
                    <span class="status-pill accent">${review.score}/5</span>
                </div>
            `;
        })
    ];

    document.getElementById("courtReviewsList").innerHTML = `<div class="list-stack">${items.join("") || `<p class="empty-copy">Aun no hay resenas publicadas.</p>`}</div>`;
}

function renderMatches() {
    document.getElementById("matchesGrid").innerHTML = data.matches.map((match) => {
        const court = getCourt(match.courtId);
        return `
            <article class="match-card">
                <div class="card-banner">
                    <p class="eyebrow">${match.level}</p>
                    <h3>${match.title}</h3>
                </div>
                <div class="card-body">
                    <p><strong>Cancha:</strong> ${court.name}</p>
                    <p><strong>Fecha:</strong> ${match.date} - ${match.time}</p>
                    <div class="badge-row">
                        <span class="badge ${match.status === "OPEN" ? "available" : "busy"}">${match.participants.length}/${match.capacity} cupos</span>
                    </div>
                    <button class="match-action" data-join-match="${match.id}">${match.joined ? "Participando" : match.status === "FULL" ? "Sin cupos" : "Unirme"}</button>
                </div>
            </article>
        `;
    }).join("");

    document.querySelectorAll("[data-join-match]").forEach((button) => {
        button.addEventListener("click", () => joinMatch(Number(button.dataset.joinMatch)));
    });
}

function createMatch() {
    const title = document.getElementById("matchTitle").value.trim();
    const courtName = document.getElementById("matchCourt").value;
    const date = document.getElementById("matchDate").value;
    const time = document.getElementById("matchTime").value;
    const feedback = document.getElementById("matchFeedback");
    const court = data.courts.find((item) => item.name === courtName);

    if (!title || !court || !date || !time) {
        setFeedback(feedback, "Completa los datos obligatorios del partido.", "error");
        return;
    }

    data.matches.unshift({
        id: Date.now(),
        title,
        courtId: court.id,
        date,
        time,
        capacity: 10,
        participants: [data.athleteProfile.name],
        joined: true,
        level: "Creado por ti",
        status: "OPEN"
    });

    setFeedback(feedback, "Partido creado. El backend actual soporta creacion y join de matches.", "success");
    renderMatches();
}

function joinMatch(matchId) {
    const match = data.matches.find((item) => item.id === matchId);

    if (match.status !== "OPEN") {
        showModal(`
            <div class="modal-body">
                <div class="success-mark">NO</div>
                <div>
                    <p class="eyebrow">Sin cupos</p>
                    <h3>${match.title}</h3>
                </div>
                <p>El partido ya esta completo y no acepta mas participantes.</p>
                <button class="primary-button full-width" onclick="window.closeModalFromAction()">Cerrar</button>
            </div>
        `);
        return;
    }

    if (!match.joined) {
        match.joined = true;
        match.participants.push(data.athleteProfile.name);
        if (match.participants.length >= match.capacity) {
            match.status = "FULL";
        }
    }

    showModal(`
        <div class="modal-body">
            <div class="success-mark">GO</div>
            <div>
                <p class="eyebrow">Participacion confirmada</p>
                <h3>${match.title}</h3>
            </div>
            <p>Ahora apareces dentro de los participantes reales del partido.</p>
            <button class="primary-button full-width" onclick="window.closeModalFromAction()">Cerrar</button>
        </div>
    `);
    renderMatches();
}

function renderNotifications() {
    document.getElementById("notificationBadge").textContent = getVisibleNotifications().filter((item) => !item.read).length.toString();
}

function renderNotificationsDrawer() {
    document.getElementById("notificationsDrawerList").innerHTML = `
        <div class="list-stack">
            ${getVisibleNotifications().slice(0, 4).map((notification) => notificationTemplate(notification)).join("")}
        </div>
    `;
    bindNotificationButtons();
}

function renderNotificationHistory() {
    document.getElementById("notificationsHistory").innerHTML = `
        <div class="list-stack">
            ${getVisibleNotifications().map((notification) => notificationTemplate(notification)).join("")}
        </div>
    `;
    bindNotificationButtons();
}

function renderNotificationDetail() {
    const notification = getVisibleNotifications().find((item) => item.id === state.selectedNotificationId);
    document.getElementById("notificationDetailContent").innerHTML = notification ? `
        <div class="detail-stack">
            <div class="summary-box">
                <div class="summary-line"><span>Titulo</span><strong>${notification.title}</strong></div>
                <div class="summary-line"><span>Momento</span><strong>${notification.time}</strong></div>
            </div>
            <p>${notification.detail}</p>
            ${notification.relatedScreen ? `<button class="primary-button full-width" id="notificationActionButton">Ir al flujo</button>` : ""}
        </div>
    ` : `<p class="empty-copy">Selecciona una notificacion para ver el detalle.</p>`;

    const actionButton = document.getElementById("notificationActionButton");
    if (actionButton && notification) {
        actionButton.addEventListener("click", () => {
            if (notification.relatedScreen === "screen-booking" || notification.relatedScreen === "screen-payment") {
                state.bookingBackTarget = "screen-notification-detail";
            }
            if (notification.relatedScreen === "screen-rate-court") {
                state.reviewBackTarget = "screen-notification-detail";
            }
            if (notification.relatedScreen === "screen-session-request") {
                state.sessionRequestBackTarget = "screen-notification-detail";
            }
            navigate(notification.relatedScreen);
        });
    }
}

function notificationTemplate(notification) {
    return `
        <button class="list-item" data-notification-id="${notification.id}">
            <div>
                <strong>${notification.title}</strong>
                <p>${notification.message}</p>
            </div>
            <span class="status-pill ${notification.read ? "accent" : "online"}">${notification.time}</span>
        </button>
    `;
}

function bindNotificationButtons() {
    document.querySelectorAll("[data-notification-id]").forEach((button) => {
        button.addEventListener("click", () => {
            state.selectedNotificationId = Number(button.dataset.notificationId);
            const notification = data.notifications.find((item) => item.id === state.selectedNotificationId);
            if (notification) notification.read = true;
            state.notificationBackTarget = state.currentScreen === "screen-notifications" ? "screen-notifications" : state.currentScreen;
            renderNotifications();
            renderNotificationDetail();
            navigate("screen-notification-detail");
        });
    });
}

function toggleNotificationsDrawer() {
    notificationsOverlay.classList.toggle("hidden");
}

function closeNotificationsDrawer(update = true) {
    notificationsOverlay.classList.add("hidden");
    if (update) renderNotificationsDrawer();
}

function goBackFromNotificationDetail() {
    navigate(state.notificationBackTarget || "screen-athlete-dashboard");
}

function renderCoachOverview() {
    const coachId = 1;
    const sessions = data.trainingSessions.filter((session) => session.coachId === coachId);
    const pending = sessions.filter((session) => session.status === "PENDING");
    const acceptedPendingPayment = sessions.filter((session) => session.status === "ACCEPTED" && session.paymentStatus === "PENDING");
    const completed = sessions.filter((session) => session.status === "COMPLETED");
    const reservedAvailabilities = getCoachAvailabilities(coachId).filter((item) => item.status === "RESERVED");
    const nextSessions = sessions.filter((session) => ["PENDING", "ACCEPTED", "COMPLETED"].includes(session.status)).slice(0, 3);
    const latestPayments = getCoachPayments().slice(0, 2);
    const latestReviews = data.coachReviews.filter((review) => review.coachId === coachId).slice(0, 2);
    const totalPaidSessions = sessions.filter((session) => session.paymentStatus === "PAID").length;
    const totalCoachReviews = data.coachReviews.filter((review) => review.coachId === coachId).length;
    const stats = [
        { label: "Slots publicados", value: String(getCoachAvailabilities(coachId).length), icon: "assets/notificaciones.png" },
        { label: "Solicitudes pendientes", value: String(pending.length), icon: "assets/reservas.png" },
        { label: "Sesiones pagadas", value: String(totalPaidSessions), icon: "assets/partidos.png" },
        { label: "Reviews validas", value: String(data.coachReviews.filter((review) => review.coachId === coachId).length), icon: "assets/reseña.png" }
    ];

    document.getElementById("coachOverview").innerHTML = stats.map(statCardTemplate).join("");
    document.getElementById("coachCommandCenter").innerHTML = `
        <div class="coach-command-grid">
            <article class="coach-command-card">
                <span class="feature-kicker">Siguiente accion</span>
                <h3>${pending.length ? "Responder solicitudes nuevas" : acceptedPendingPayment.length ? "Esperar pago del jugador" : "Agenda bajo control"}</h3>
                <p>${pending.length
                    ? `Tienes ${pending.length} training session${pending.length > 1 ? "s" : ""} en PENDING que necesitan aceptacion o rechazo.`
                    : acceptedPendingPayment.length
                        ? `Hay ${acceptedPendingPayment.length} sesiones ACCEPTED pendientes de pago antes del servicio.`
                        : `No hay bloqueos urgentes. Puedes abrir mas disponibilidad o revisar metricas.`}</p>
            </article>
            <article class="coach-command-card accent-card">
                <span class="feature-kicker">Agenda reservada</span>
                <h3>${reservedAvailabilities.length} slots reservados</h3>
                <p>${completed.length} sesiones completadas y ${totalPaidSessions} operaciones pagadas en el flujo actual.</p>
            </article>
        </div>
    `;
    document.getElementById("coachPriorityPanel").innerHTML = `
        <div class="panel-header">
            <h3>Resumen operativo del dia</h3>
            <button class="text-button" data-nav-target="${pending.length ? "screen-requests" : "screen-availability"}">${pending.length ? "Responder ahora" : "Abrir agenda"}</button>
        </div>
        <div class="coach-priority-grid">
            <div class="field-box soft-box">
                <span>Solicitudes PENDING</span>
                <strong>${pending.length}</strong>
            </div>
            <div class="field-box soft-box">
                <span>ACCEPTED sin pago</span>
                <strong>${acceptedPendingPayment.length}</strong>
            </div>
            <div class="field-box soft-box">
                <span>Disponibilidades RESERVED</span>
                <strong>${reservedAvailabilities.length}</strong>
            </div>
            <div class="field-box soft-box">
                <span>Reseñas del coach</span>
                <strong>${totalCoachReviews}</strong>
            </div>
        </div>
    `;
    document.getElementById("coachTodayBoard").innerHTML = `
        <div class="coach-feed-grid">
            <article class="coach-feed-card">
                <span class="feature-kicker">Agenda operativa</span>
                <div class="list-stack">
                    ${nextSessions.length ? nextSessions.map((session) => {
                        const court = getCourt(session.courtId);
                        return `
                            <div class="list-item">
                                <div>
                                    <strong>${session.playerName}</strong>
                                    <p>${court.name} · ${session.date} ${session.time}</p>
                                </div>
                                <span class="status-pill ${statusClass(session.status)}">${humanizeStatus(session.status)}</span>
                            </div>
                        `;
                    }).join("") : `<p class="empty-copy">No hay sesiones proximas en el flujo actual.</p>`}
                </div>
            </article>
            <article class="coach-feed-card">
                <span class="feature-kicker">Actividad reciente</span>
                <div class="list-stack">
                    ${latestPayments.map((payment) => `
                        <div class="list-item">
                            <div>
                                <strong>${payment.amount}</strong>
                                <p>${payment.player} · ${payment.detail}</p>
                            </div>
                            <span class="status-pill accent">${payment.date}</span>
                        </div>
                    `).join("")}
                    ${latestReviews.map((review) => `
                        <div class="list-item">
                            <div>
                                <strong>${review.author}</strong>
                                <p>${review.comment}</p>
                            </div>
                            <span class="status-pill online">${review.score}/5</span>
                        </div>
                    `).join("") || `<p class="empty-copy">Aun no hay actividad reciente del coach.</p>`}
                </div>
            </article>
        </div>
    `;
}

function renderAvailabilitySummary() {
    document.getElementById("availabilitySummary").innerHTML = `<div class="list-stack">${getCoachAvailabilities(1).map(availabilityTemplate).join("")}</div>`;
}

function renderAvailabilityDetail() {
    document.getElementById("availabilityDetail").innerHTML = `<div class="list-stack">${getCoachAvailabilities(1).map(availabilityTemplate).join("")}</div>`;
}

function availabilityTemplate(item) {
    return `
        <div class="list-item">
            <div>
                <strong>${item.date}</strong>
                <p>${item.time}</p>
            </div>
            <span class="status-pill ${item.status === "AVAILABLE" ? "online" : item.status === "RESERVED" ? "muted" : "accent"}">${item.status}</span>
        </div>
    `;
}

function saveAvailability() {
    const day = document.getElementById("availabilityDay").value;
    const time = document.getElementById("availabilityTime").value.trim();
    const feedback = document.getElementById("availabilityFeedback");
    const dateMap = {
        "Lunes": "19 Mar",
        "Martes": "20 Mar",
        "Miercoles": "21 Mar",
        "Jueves": "22 Mar",
        "Viernes": "23 Mar",
        "Sabado": "24 Mar"
    };

    if (!time) {
        setFeedback(feedback, "Debes indicar un horario valido.", "error");
        return;
    }

    const date = dateMap[day];
    const duplicated = data.availabilities.some((item) => item.coachId === 1 && item.date === date && item.time === time);
    if (duplicated) {
        setFeedback(feedback, "Ese bloque ya existe en la agenda del coach.", "error");
        return;
    }

    data.availabilities.unshift({
        id: Date.now(),
        coachId: 1,
        date,
        time,
        status: "AVAILABLE"
    });

    setFeedback(feedback, "Disponibilidad publicada. Ahora si puede usarse en un training session real.", "success");
    renderAll();
}

function renderRequestsPreview() {
    const requests = data.trainingSessions.filter((session) => session.coachId === 1).slice(0, 3);
    document.getElementById("requestsList").innerHTML = `<div class="list-stack">${requests.map(sessionPreviewTemplate).join("")}</div>`;
}

function renderRequestsManager() {
    const sessions = data.trainingSessions.filter((session) => session.coachId === 1);
    document.getElementById("requestsManager").innerHTML = `
        <div class="list-stack">
            ${sessions.map((session) => {
                const coach = getCoach(session.coachId);
                const court = getCourt(session.courtId);
                return `
                    <div class="list-item">
                        <div>
                            <strong>${session.playerName}</strong>
                            <p>${coach.specialty} · ${court.name} · ${session.date} ${session.time}</p>
                            <p>${session.goal}</p>
                        </div>
                        <div class="action-group">
                            ${session.status === "PENDING" ? `<button class="small-button" data-accept-session="${session.id}">Aceptar</button><button class="small-button secondary" data-reject-session="${session.id}">Rechazar</button>` : ""}
                            ${session.status === "ACCEPTED" && session.paymentStatus === "PAID" ? `<button class="small-button" data-complete-session="${session.id}">Completar</button>` : ""}
                            <span class="status-pill ${statusClass(session.status)}">${humanizeStatus(session.status)}</span>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    document.querySelectorAll("[data-accept-session]").forEach((button) => {
        button.addEventListener("click", () => updateTrainingSessionStatus(Number(button.dataset.acceptSession), "ACCEPTED"));
    });
    document.querySelectorAll("[data-reject-session]").forEach((button) => {
        button.addEventListener("click", () => updateTrainingSessionStatus(Number(button.dataset.rejectSession), "REJECTED"));
    });
    document.querySelectorAll("[data-complete-session]").forEach((button) => {
        button.addEventListener("click", () => updateTrainingSessionStatus(Number(button.dataset.completeSession), "COMPLETED"));
    });
}

function sessionPreviewTemplate(session) {
    const court = getCourt(session.courtId);
    return `
        <div class="list-item">
            <div>
                <strong>${session.playerName}</strong>
                <p>${court.name} · ${session.date} ${session.time}</p>
            </div>
            <span class="status-pill ${statusClass(session.status)}">${humanizeStatus(session.status)}</span>
        </div>
    `;
}

function updateTrainingSessionStatus(sessionId, status) {
    const session = getTrainingSession(sessionId);
    const availability = session.availabilityId ? getAvailability(session.availabilityId) : null;
    const coach = getCoach(session.coachId);

    if (status === "ACCEPTED" && session.status === "PENDING") {
        session.status = "ACCEPTED";
        if (availability) availability.status = "RESERVED";
        createNotification("athlete", "Solicitud aceptada", `${coach.name} aprobo tu training session.`, "Ahora", `La training session ahora esta en ACCEPTED. El siguiente paso correcto es pagar la operacion.`, "screen-payment");
    }

    if (status === "REJECTED" && session.status === "PENDING") {
        session.status = "REJECTED";
        createNotification("athlete", "Solicitud rechazada", `${coach.name} rechazo la solicitud.`, "Ahora", `La training session fue rechazada por el coach y no continuara al flujo de pago.`, "screen-athlete-dashboard");
    }

    if (status === "COMPLETED" && session.status === "ACCEPTED" && session.paymentStatus === "PAID") {
        session.status = "COMPLETED";
        createNotification("athlete", "Sesion completada", `Ya puedes valorar a ${coach.name}.`, "Ahora", `La training session fue completada y se habilito una resena valida del coach.`, "screen-rate-court");
    }

    renderAll();
}

function cancelTrainingSession(sessionId) {
    const session = getTrainingSession(sessionId);
    const feedback = document.getElementById("bookingFeedback");
    if (!session || ["COMPLETED", "CANCELLED", "REJECTED"].includes(session.status)) {
        setFeedback(feedback, "La training session ya no puede cancelarse.", "error");
        return;
    }

    session.status = "CANCELLED";
    const availability = session.availabilityId ? getAvailability(session.availabilityId) : null;
    if (availability) availability.status = "AVAILABLE";
    createNotification("athlete", "Sesion cancelada", `Se libero el horario ${session.date} ${session.time}.`, "Ahora", `La training session fue cancelada y la disponibilidad del coach volvio a quedar libre.`, "screen-athlete-dashboard");
    createNotification("coach", "Sesion cancelada", `${session.playerName} cancelo una solicitud.`, "Ahora", `La disponibilidad asociada volvio a estado AVAILABLE.`, "screen-requests");
    setFeedback(feedback, "Training session cancelada y disponibilidad liberada.", "success");
    renderAll();
}

function renderPaymentsPreview() {
    const payments = getCoachPayments().slice(0, 3);
    document.getElementById("paymentsPreview").innerHTML = `<div class="list-stack">${payments.map(paymentTemplate).join("") || `<p class="empty-copy">No hay pagos recibidos aun.</p>`}</div>`;
}

function renderPaymentsDetail() {
    const payments = getCoachPayments();
    document.getElementById("paymentsDetail").innerHTML = payments.length
        ? `<div class="list-stack">${payments.map(paymentTemplate).join("")}</div>`
        : `<p class="empty-copy">No hay pagos recibidos aun.</p>`;
}

function paymentTemplate(payment) {
    return `
        <div class="list-item">
            <div>
                <strong>${payment.amount}</strong>
                <p>${payment.player} · ${payment.detail}</p>
            </div>
            <span class="status-pill accent">${payment.date}</span>
        </div>
    `;
}

function renderMetrics() {
    const metrics = getCoachMetrics();
    document.getElementById("analyticsDetail").innerHTML = `
        <div class="list-stack">
            ${metrics.map((metric) => `
                <div class="list-item">
                    <div>
                        <strong>${metric.label}</strong>
                        <p>${metric.note}</p>
                    </div>
                    <span class="status-pill accent">${metric.value}</span>
                </div>
            `).join("")}
        </div>
    `;
}

function renderCoachReviews() {
    const reviews = data.coachReviews.filter((review) => review.coachId === 1);
    const markup = reviews.length
        ? `<div class="list-stack">${reviews.map((review) => `
            <div class="list-item">
                <div>
                    <strong>${review.author}</strong>
                    <p>${review.comment}</p>
                </div>
                <span class="status-pill online">${review.score}/5</span>
            </div>
        `).join("")}</div>`
        : `<p class="empty-copy">Aun no hay resenas del coach.</p>`;

    document.getElementById("reviewsList").innerHTML = markup;
    document.getElementById("reviewsDetail").innerHTML = markup;
}


function renderAthletePaymentsPreview() {
    const container = document.getElementById("athletePaymentsPreview");
    if (!container) return;
    const payments = getAthletePaymentEntries().slice(0, 3);
    container.innerHTML = payments.length
        ? `<div class="list-stack">${payments.map(athletePaymentTemplate).join("")}</div>`
        : `<p class="empty-copy">Aun no tienes pagos registrados.</p>`;
}

function renderAthletePaymentsDetail() {
    const container = document.getElementById("athletePaymentsDetail");
    if (!container) return;
    const payments = getAthletePaymentEntries();
    container.innerHTML = payments.length
        ? `<div class="list-stack">${payments.map(athletePaymentTemplate).join("")}</div>`
        : `<p class="empty-copy">Aun no tienes pagos registrados.</p>`;
}

function athletePaymentTemplate(payment) {
    return `
        <div class="list-item">
            <div>
                <strong>${payment.title}</strong>
                <p>${payment.copy}</p>
            </div>
            <div class="action-group">
                <span class="status-pill ${statusClass(payment.status)}">${humanizeStatus(payment.status)}</span>
                <span class="status-pill accent">${payment.amount}</span>
            </div>
        </div>
    `;
}

function renderAdminOverview() {
    const container = document.getElementById("adminOverview");
    if (!container) return;
    const stats = [
        { label: "Courts activas", value: String(data.courts.length), icon: "assets/reservas.png" },
        { label: "Usuarios IAM", value: String(data.iamUsers.length), icon: "assets/notificaciones.png" },
        { label: "Roles", value: String(data.iamRoles.length), icon: "assets/partidos.png" },
        { label: "Coaches", value: String(data.coaches.length), icon: "assets/reseña.png" }
    ];
    container.innerHTML = stats.map(statCardTemplate).join("");

    document.getElementById("adminCourtsPreview").innerHTML = `
        <div class="list-stack">
            ${data.courts.slice(0, 3).map((court) => `
                <div class="list-item">
                    <div>
                        <strong>${court.name}</strong>
                        <p>${court.location} · ${court.sport}</p>
                    </div>
                    <span class="status-pill accent">${formatMoney(court.pricePerHour)}</span>
                </div>
            `).join("")}
        </div>
    `;

    document.getElementById("adminIamPreview").innerHTML = `
        <div class="list-stack">
            <div class="list-item">
                <div>
                    <strong>UsersController</strong>
                    <p>Consulta de usuarios autenticables del sistema.</p>
                </div>
                <span class="status-pill online">${data.iamUsers.length}</span>
            </div>
            <div class="list-item">
                <div>
                    <strong>RolesController</strong>
                    <p>Roles disponibles segun el enum del backend.</p>
                </div>
                <span class="status-pill accent">${data.iamRoles.length}</span>
            </div>
        </div>
    `;
}

function renderAdminCourts() {
    const list = document.getElementById("adminCourtsList");
    if (!list) return;
    fillSelect("adminCourtSelect", data.courts.map((court) => `${court.id}|${court.name}`), true);
    syncAdminCourtForm();
    list.innerHTML = `
        <div class="list-stack">
            ${data.courts.map((court) => `
                <div class="list-item">
                    <div>
                        <strong>${court.name}</strong>
                        <p>${court.location} · ${court.sport}</p>
                    </div>
                    <span class="status-pill accent">${formatMoney(court.pricePerHour)}</span>
                </div>
            `).join("")}
        </div>
    `;
}

function syncAdminCourtForm() {
    const select = document.getElementById("adminCourtSelect");
    if (!select) return;
    const selectedId = Number(select.value || state.selectedAdminCourtId || data.courts[0]?.id);
    state.selectedAdminCourtId = selectedId;
    const court = getCourt(selectedId) || data.courts[0];
    if (!court) return;
    document.getElementById("adminCourtName").value = court.name;
    document.getElementById("adminCourtLocation").value = court.location;
    document.getElementById("adminCourtSport").value = court.sport;
    document.getElementById("adminCourtPrice").value = court.pricePerHour;
    document.getElementById("adminCourtImage").value = court.imageUrl;
}

function saveAdminCourt() {
    const feedback = document.getElementById("adminCourtFeedback");
    const court = getCourt(state.selectedAdminCourtId);
    const name = document.getElementById("adminCourtName").value.trim();
    const location = document.getElementById("adminCourtLocation").value.trim();
    const sport = document.getElementById("adminCourtSport").value.trim();
    const price = Number(document.getElementById("adminCourtPrice").value);
    const imageUrl = document.getElementById("adminCourtImage").value.trim();

    if (!court || !name || !location || !sport || !(price > 0) || !imageUrl) {
        setFeedback(feedback, "Debes completar todos los campos y el precio debe ser mayor que cero.", "error");
        return;
    }

    court.name = name;
    court.location = location;
    court.sport = sport;
    court.pricePerHour = price;
    court.imageUrl = imageUrl;
    setFeedback(feedback, "Cancha actualizada. Esto representa el update del bounded context Courts.", "success");
    renderAll();
}

function createAdminCourt() {
    const feedback = document.getElementById("adminCourtFeedback");
    const name = document.getElementById("adminCourtName").value.trim();
    const location = document.getElementById("adminCourtLocation").value.trim();
    const sport = document.getElementById("adminCourtSport").value.trim();
    const price = Number(document.getElementById("adminCourtPrice").value);
    const imageUrl = document.getElementById("adminCourtImage").value.trim();

    if (!name || !location || !sport || !(price > 0) || !imageUrl) {
        setFeedback(feedback, "La nueva cancha necesita nombre, ubicacion, tipo, precio valido e imagen.", "error");
        return;
    }

    const newCourt = {
        id: Date.now(),
        name,
        location,
        sport,
        pricePerHour: price,
        imageUrl,
        summary: "Cancha registrada desde el panel de administracion.",
        address: `${location} - direccion por completar`,
        status: "available",
        slots: ["6:00 PM", "7:00 PM"],
        rating: 4.5
    };
    data.courts.unshift(newCourt);
    state.selectedAdminCourtId = newCourt.id;
    setFeedback(feedback, "Nueva cancha creada desde el flujo ADMIN.", "success");
    renderAll();
}

function deleteAdminCourt() {
    const feedback = document.getElementById("adminCourtFeedback");
    const index = data.courts.findIndex((court) => court.id === state.selectedAdminCourtId);
    if (index === -1) {
        setFeedback(feedback, "No se encontro la cancha seleccionada.", "error");
        return;
    }
    const deleted = data.courts.splice(index, 1)[0];
    state.selectedAdminCourtId = data.courts[0]?.id || null;
    setFeedback(feedback, `Cancha eliminada: ${deleted.name}.`, "success");
    renderAll();
}

function renderIamViews() {
    const users = document.getElementById("iamUsersList");
    const roles = document.getElementById("iamRolesList");
    if (!users || !roles) return;

    users.innerHTML = `
        <div class="list-stack">
            ${data.iamUsers.map((user) => `
                <div class="list-item">
                    <div>
                        <strong>${user.username}</strong>
                        <p>GET /api/v1/users/${user.id}</p>
                    </div>
                    <span class="status-pill accent">${user.roles.join(", ")}</span>
                </div>
            `).join("")}
        </div>
    `;

    roles.innerHTML = `
        <div class="list-stack">
            ${data.iamRoles.map((role) => `
                <div class="list-item">
                    <div>
                        <strong>${role}</strong>
                        <p>Rol disponible para autorizacion en el backend.</p>
                    </div>
                    <span class="status-pill online">Activo</span>
                </div>
            `).join("")}
        </div>
    `;
}

function renderProfile() {
    const profile = state.role === "coach" ? data.coachProfile : state.role === "admin" ? data.adminProfile : data.athleteProfile;
    const initials = profile.name.split(" ").map((part) => part[0]).join("").slice(0, 2);
    const extraLeft = state.role === "coach" ? "Especialidad" : state.role === "admin" ? "Enfoque" : "Deporte favorito";
    const extraRight = state.role === "coach" ? "Experiencia" : state.role === "admin" ? "Permisos" : "Modelo";
    const extraLeftValue = state.role === "coach" ? profile.specialty : state.role === "admin" ? profile.focus : profile.favoriteSport;
    const extraRightValue = state.role === "coach" ? profile.experience : state.role === "admin" ? "ROLE_ADMIN" : "Pago por transaccion";

    document.getElementById("profileCard").innerHTML = `
        <div class="profile-header">
            <div>
                <p class="eyebrow">${profile.role}</p>
                <h3>${profile.name}</h3>
            </div>
            ${profile.imageUrl ? `<img class="avatar avatar-image" src="${profile.imageUrl}" alt="${profile.name}">` : `<div class="avatar">${initials}</div>`}
        </div>
        <div class="profile-fields">
            <div class="field-box"><span>Email</span><strong>${profile.email}</strong></div>
            <div class="field-box"><span>Telefono</span><strong>${profile.phone}</strong></div>
            <div class="field-box"><span>${extraLeft}</span><strong>${extraLeftValue}</strong></div>
            <div class="field-box"><span>${extraRight}</span><strong>${extraRightValue}</strong></div>
        </div>
    `;

    document.getElementById("profileForm").innerHTML = state.role === "coach" ? `
        <label class="field">
            <span>Nombre</span>
            <input type="text" id="profileName" value="${profile.name}">
        </label>
        <label class="field">
            <span>Email</span>
            <input type="email" id="profileEmail" value="${profile.email}">
        </label>
        <label class="field">
            <span>Telefono</span>
            <input type="text" id="profilePhone" value="${profile.phone}">
        </label>
        <label class="field">
            <span>Especialidad</span>
            <input type="text" id="profileSpecialty" value="${profile.specialty}">
        </label>
        <label class="field">
            <span>Experiencia</span>
            <input type="text" id="profileExperience" value="${profile.experience}">
        </label>
        <label class="field">
            <span>URL de imagen</span>
            <input type="text" id="profileImageUrl" value="${profile.imageUrl}">
        </label>
    ` : state.role === "admin" ? `
        <label class="field">
            <span>Nombre</span>
            <input type="text" id="profileName" value="${profile.name}">
        </label>
        <label class="field">
            <span>Email</span>
            <input type="email" id="profileEmail" value="${profile.email}">
        </label>
        <label class="field">
            <span>Telefono</span>
            <input type="text" id="profilePhone" value="${profile.phone}">
        </label>
        <label class="field">
            <span>Enfoque</span>
            <input type="text" id="profileFocus" value="${profile.focus}">
        </label>
        <label class="field">
            <span>URL de imagen</span>
            <input type="text" id="profileImageUrl" value="${profile.imageUrl}">
        </label>
    ` : `
        <label class="field">
            <span>Nombre</span>
            <input type="text" id="profileName" value="${profile.name}">
        </label>
        <label class="field">
            <span>Email</span>
            <input type="email" id="profileEmail" value="${profile.email}">
        </label>
        <label class="field">
            <span>Telefono</span>
            <input type="text" id="profilePhone" value="${profile.phone}">
        </label>
        <label class="field">
            <span>Deporte favorito</span>
            <input type="text" id="profileFavoriteSport" value="${profile.favoriteSport}">
        </label>
        <label class="field">
            <span>URL de imagen</span>
            <input type="text" id="profileImageUrl" value="${profile.imageUrl}">
        </label>
    `;

    document.getElementById("profileActivity").innerHTML = `
        <div class="list-stack">
            <div class="list-item">
                <div>
                    <strong>Persistencia del perfil</strong>
                    <p>El mockup asume que el backend guarda perfil personal y perfil profesional segun el rol autenticado.</p>
                </div>
            </div>
            <div class="list-item">
                <div>
                    <strong>Imagen de perfil</strong>
                    <p>La URL de imagen ya forma parte del flujo actual del backend para el perfil del usuario.</p>
                </div>
            </div>
            <div class="list-item">
                <div>
                    <strong>Modelo del backend</strong>
                    <p>${state.role === "admin" ? "Esta vista conecta IAM y Courts. El backend no maneja planes mensuales." : "El backend actual cobra por booking y por training session, no por membresia."}</p>
                </div>
            </div>
        </div>
    `;
}

function saveProfile() {
    const feedback = document.getElementById("profileFeedback");
    const name = document.getElementById("profileName").value.trim();
    const email = document.getElementById("profileEmail").value.trim();
    const phone = document.getElementById("profilePhone").value.trim();
    const imageUrl = document.getElementById("profileImageUrl").value.trim();

    if (!name || !email.includes("@") || !phone) {
        setFeedback(feedback, "Hay datos invalidos o incompletos en el perfil.", "error");
        return;
    }

    if (state.role === "coach") {
        data.coachProfile = {
            ...data.coachProfile,
            name,
            email,
            phone,
            specialty: document.getElementById("profileSpecialty").value.trim(),
            experience: document.getElementById("profileExperience").value.trim(),
            imageUrl
        };
    } else if (state.role === "admin") {
        data.adminProfile = {
            ...data.adminProfile,
            name,
            email,
            phone,
            focus: document.getElementById("profileFocus").value.trim(),
            imageUrl
        };
    } else {
        data.athleteProfile = {
            ...data.athleteProfile,
            name,
            email,
            phone,
            favoriteSport: document.getElementById("profileFavoriteSport").value.trim(),
            imageUrl
        };
    }

    setFeedback(feedback, "Perfil actualizado. El mockup refleja datos persistidos e imagen URL.", "success");
    renderProfile();
}

function bindStaticNavButtons() {
    document.querySelectorAll("[data-nav-target]").forEach((button) => {
        if (button.dataset.bound === "true") return;
        button.dataset.bound = "true";
        button.addEventListener("click", () => navigate(button.dataset.navTarget));
    });
}

function getAthleteOperations() {
    const bookingOperations = data.bookings.map((booking) => {
        const court = getCourt(booking.courtId);
        return {
            id: booking.id,
            type: "BOOKING",
            title: court.name,
            subtitle: `${booking.date} · ${booking.time}`,
            kind: "Booking simple",
            amount: formatMoney(court.pricePerHour),
            status: booking.status,
            paymentPending: booking.paymentStatus === "PENDING" && booking.status !== "CANCELLED",
            cancelable: !["COMPLETED", "CANCELLED"].includes(booking.status),
            receipt: booking.receipt
        };
    });

    const trainingOperations = data.trainingSessions.map((session) => {
        const coach = getCoach(session.coachId);
        const court = getCourt(session.courtId);
        return {
            id: session.id,
            type: "TRAINING_SESSION",
            title: `Sesion con ${coach.name}`,
            subtitle: `${court.name} · ${session.date} ${session.time}`,
            kind: "Training session",
            amount: formatMoney(session.price),
            status: session.status,
            paymentPending: session.paymentStatus === "PENDING" && session.status === "ACCEPTED",
            cancelable: ["PENDING", "ACCEPTED"].includes(session.status),
            receipt: session.receipt
        };
    });

    return [...trainingOperations, ...bookingOperations];
}

function getPendingPayments() {
    const pendingBookings = data.bookings
        .filter((booking) => booking.paymentStatus === "PENDING" && booking.status === "PENDING_PAYMENT")
        .map((booking) => {
            const court = getCourt(booking.courtId);
            return {
                id: booking.id,
                type: "BOOKING",
                title: court.name,
                date: `${booking.date} · ${booking.time}`,
                amount: formatMoney(court.pricePerHour),
                status: booking.status,
                copy: "Booking simple pendiente de pago"
            };
        });

    const pendingSessions = data.trainingSessions
        .filter((session) => session.paymentStatus === "PENDING" && session.status === "ACCEPTED")
        .map((session) => ({
            id: session.id,
            type: "TRAINING_SESSION",
            title: `Sesion con ${getCoach(session.coachId).name}`,
            date: `${session.date} · ${session.time}`,
            amount: formatMoney(session.price),
            status: session.status,
            copy: "Training session aceptada pendiente de pago"
        }));

    return [...pendingSessions, ...pendingBookings];
}

function resolvePaymentTarget() {
    if (state.paymentTarget.type && state.paymentTarget.id) {
        if (state.paymentTarget.type === "BOOKING") {
            const booking = getBooking(state.paymentTarget.id);
            const court = booking ? getCourt(booking.courtId) : null;
            if (!booking || !court) return null;
            return {
                type: "BOOKING",
                id: booking.id,
                title: court.name,
                copy: `${booking.date} · ${booking.time}`,
                status: booking.status,
                amount: formatMoney(court.pricePerHour)
            };
        }

        if (state.paymentTarget.type === "TRAINING_SESSION") {
            const session = getTrainingSession(state.paymentTarget.id);
            if (!session) return null;
            return {
                type: "TRAINING_SESSION",
                id: session.id,
                title: `Sesion con ${getCoach(session.coachId).name}`,
                copy: `${session.date} · ${session.time}`,
                status: session.status,
                amount: formatMoney(session.price)
            };
        }
    }

    const next = getPendingPayments()[0];
    if (next) {
        state.paymentTarget = { type: next.type, id: next.id };
        return next;
    }
    return null;
}

function getVisibleNotifications() {
    if (!state.role) return [];
    return data.notifications.filter((notification) => notification.role === state.role);
}

function getCoachPayments() {
    return data.trainingSessions
        .filter((session) => session.coachId === 1 && session.paymentStatus === "PAID")
        .map((session) => ({
            amount: formatMoney(session.price),
            player: session.playerName,
            detail: `${getCourt(session.courtId).name} · ${session.date}`,
            date: session.date
        }));
}

function getAthletePaymentEntries() {
    const bookingPayments = data.bookings.map((booking) => {
        const court = getCourt(booking.courtId);
        return {
            title: `Booking · ${court.name}`,
            copy: `${booking.date} · ${booking.time} · ${booking.receipt || "Sin comprobante"}`,
            amount: formatMoney(court.pricePerHour),
            status: booking.paymentStatus === "PAID" ? "PAID" : booking.paymentStatus === "VOID" ? "CANCELLED" : "PENDING_PAYMENT"
        };
    });

    const trainingPayments = data.trainingSessions.map((session) => ({
        title: `Training session · ${getCoach(session.coachId).name}`,
        copy: `${session.date} · ${session.time} · ${session.receipt || "Sin comprobante"}`,
        amount: formatMoney(session.price),
        status: session.paymentStatus === "PAID" ? "PAID" : session.status === "REJECTED" ? "CANCELLED" : "PENDING_PAYMENT"
    }));

    return [...trainingPayments, ...bookingPayments];
}

function getCoachMetrics() {
    const coachId = 1;
    const sessions = data.trainingSessions.filter((session) => session.coachId === coachId);
    const reviews = data.coachReviews.filter((review) => review.coachId === coachId);
    const avgRating = reviews.length ? (reviews.reduce((sum, review) => sum + review.score, 0) / reviews.length).toFixed(1) : "0.0";
    const revenue = sessions
        .filter((session) => session.paymentStatus === "PAID")
        .reduce((sum, session) => sum + session.price, 0);

    return [
        {
            label: "Solicitudes recibidas",
            value: String(sessions.length),
            note: "Total de training sessions registradas para el coach."
        },
        {
            label: "Sesiones completadas",
            value: String(sessions.filter((session) => session.status === "COMPLETED").length),
            note: "Solo cuentan sesiones cerradas correctamente."
        },
        {
            label: "Rating promedio",
            value: `${avgRating}/5`,
            note: "Derivado de reviews validas luego de sesiones completadas."
        },
        {
            label: "Revenue total",
            value: formatMoney(revenue),
            note: "Suma de training sessions pagadas, no editable manualmente."
        }
    ];
}

function createNotification(role, title, message, time, detail, relatedScreen) {
    data.notifications.unshift({
        id: Date.now() + Math.floor(Math.random() * 100),
        role,
        title,
        message,
        time,
        detail,
        relatedScreen,
        read: false
    });
}

function getCourt(id) {
    return data.courts.find((court) => court.id === id);
}

function getCoach(id) {
    return data.coaches.find((coach) => coach.id === id);
}

function getAvailability(id) {
    return data.availabilities.find((availability) => availability.id === id);
}

function getBooking(id) {
    return data.bookings.find((booking) => booking.id === id);
}

function getTrainingSession(id) {
    return data.trainingSessions.find((session) => session.id === id);
}

function getCoachAvailabilities(coachId) {
    return data.availabilities.filter((availability) => availability.coachId === coachId);
}

function getSelectedCourt() {
    return getCourt(state.selectedCourtId) || data.courts[0];
}

function humanizeCourtStatus(status) {
    if (status === "available") return "Disponible";
    if (status === "limited") return "Pocos slots";
    return "Sin horarios";
}

function humanizeStatus(status) {
    const map = {
        PENDING: "Pendiente",
        PENDING_PAYMENT: "Pendiente de pago",
        ACCEPTED: "Aceptada",
        REJECTED: "Rechazada",
        CONFIRMED: "Confirmada",
        COMPLETED: "Completada",
        CANCELLED: "Cancelada",
        PAID: "Pagado",
        VOID: "Anulado"
    };
    return map[status] || status;
}

function statusClass(status) {
    if (["CONFIRMED", "COMPLETED", "PAID"].includes(status)) return "online";
    if (["PENDING", "PENDING_PAYMENT", "ACCEPTED"].includes(status)) return "muted";
    return "accent";
}

function formatMoney(value) {
    return `S/ ${value}`;
}

function setFeedback(element, message, type) {
    element.textContent = message;
    element.className = `inline-feedback ${type}`;
    element.classList.remove("hidden");
}

function clearFeedback(element) {
    element.textContent = "";
    element.className = "inline-feedback hidden";
}

function showModal(content) {
    modalContent.innerHTML = content;
    modal.classList.remove("hidden");
}

function closeModal() {
    modal.classList.add("hidden");
}

function statCardTemplate(item) {
    return `
        <article class="stat-card">
            <div class="stat-icon-wrap">
                <span class="stat-icon-glow"></span>
                <img class="stat-icon-image" src="${item.icon}" alt="${item.label}">
            </div>
            <div class="stat-copy">
                <p class="eyebrow">${item.label}</p>
                <strong>${item.value}</strong>
            </div>
        </article>
    `;
}

function reviewCardTemplate(author, roleLabel, score, comment, coachRole = false) {
    return `
        <article class="review-card">
            <div class="review-card-top">
                <div>
                    <strong>${author}</strong>
                    <span class="review-role ${coachRole ? "coach-role" : ""}">${roleLabel}</span>
                </div>
                <span class="review-time">Operacion valida</span>
            </div>
            <div class="review-stars">${renderStars(score)}</div>
            <p>${comment}</p>
        </article>
    `;
}

function renderStars(score) {
    const rounded = Math.round(score);
    return `${"*".repeat(rounded)}${"-".repeat(5 - rounded)}`;
}

function normalizeVisibleCopy() {
    const replaceText = (selector, value) => {
        document.querySelectorAll(selector).forEach((node) => {
            if (node.childElementCount === 0 && /[A-Za-zÁ-ÿ]/.test(node.textContent || "")) {
                node.textContent = value;
            }
        });
    };

    replaceText("button", "[BOTON]");
    replaceText("h1, h2, h3, h4", "[TITULO]");
    replaceText(".eyebrow, .section-subtitle, .helper-copy, .empty-copy, .review-time", "[SUBTITULO]");
    replaceText("label span, .summary-line span, .field-box span, .feature-data-chip span, .review-role, .status-pill", "[SUBTITULO]");
    replaceText("option", "[OPCION]");
    replaceText("p", "[SUBTITULO]");
    replaceText("strong", "[TITULO]");
}

window.closeModalFromAction = closeModal;
