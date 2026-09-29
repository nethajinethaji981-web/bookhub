/* ==========================================================================
   BOOK HUB - Vanilla JavaScript Engine (BSc Computer Science Project)
   ========================================================================== */

// ── Sample Books Data Store ─────────────────────────────────────────────
const DEFAULT_BOOKS = [
  {
    id: "bk-1",
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    category: "Programming",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn't have to be that way.",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-2",
    title: "Data Structures & Algorithms Made Easy",
    author: "Narasimha Karumanchi",
    category: "Computer Science",
    price: 550,
    originalPrice: 750,
    rating: 4.7,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    description: "Essential guide for computer science students and software engineers preparing for coding interviews. Covers linked lists, trees, graphs, sorting, searching, dynamic programming, and complexity analysis.",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-3",
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    category: "Computer Science",
    price: 820,
    originalPrice: 1050,
    rating: 4.9,
    reviewsCount: 180,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    description: "Captures a wealth of experience in building object-oriented software. Four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems.",
    isBestseller: false,
    isNewArrival: false
  },
  {
    id: "bk-4",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    category: "Programming",
    price: 499,
    originalPrice: 650,
    rating: 4.6,
    reviewsCount: 120,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    description: "Unearths the elegant subset of JavaScript that makes it a truly great programming language. Learn how to write effective, elegant, and maintainable JavaScript code.",
    isBestseller: false,
    isNewArrival: true
  },
  {
    id: "bk-5",
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    category: "Computer Science",
    price: 1150,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    description: "The authoritative, standard textbook on Artificial Intelligence. Explores machine learning, neural networks, computer vision, natural language processing, and autonomous agents.",
    isBestseller: true,
    isNewArrival: true
  },
  {
    id: "bk-6",
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "David Thomas & Andrew Hunt",
    category: "Programming",
    price: 749,
    originalPrice: 950,
    rating: 4.8,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    description: "Cuts through the increasing specialization and technicalities of modern software development to examine the core process: taking a requirement and producing working, maintainable code.",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-7",
    title: "Atomic Habits: An Easy & Proven Way to Build Good Habits",
    author: "James Clear",
    category: "Self Development",
    price: 450,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 1520,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you exactly how to form good habits and break bad ones.",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-8",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History",
    price: 520,
    originalPrice: 799,
    rating: 4.7,
    reviewsCount: 980,
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=600&q=80",
    description: "100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance?",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-9",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Business",
    price: 399,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 840,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people.",
    isBestseller: false,
    isNewArrival: true
  },
  {
    id: "bk-10",
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    price: 320,
    originalPrice: 450,
    rating: 4.6,
    reviewsCount: 1100,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    description: "Combining magic, mysticism, wisdom, and wonder into an inspiring tale of self-discovery, The Alchemist has become a modern classic, selling millions of copies around the world.",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-11",
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    category: "Science",
    price: 430,
    originalPrice: 599,
    rating: 4.7,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    description: "What is the nature of space and time? How do we fit within the universe? How does the universe fit within us? Neil deGrasse Tyson brings the cosmos down to Earth succinctly and clearly.",
    isBestseller: false,
    isNewArrival: true
  },
  {
    id: "bk-12",
    title: "Deep Work: Rules for Focused Success in a Distracted World",
    author: "Cal Newport",
    category: "Self Development",
    price: 480,
    originalPrice: 650,
    rating: 4.8,
    reviewsCount: 460,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    description: "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.",
    isBestseller: false,
    isNewArrival: true
  },
  {
    id: "bk-13",
    title: "Python Crash Course, 3rd Edition",
    author: "Eric Matthes",
    category: "Programming",
    price: 680,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 510,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=600&q=80",
    description: "A fast-paced, thorough introduction to programming with Python that will have you writing programs, solving problems, and making things that work in no time.",
    isBestseller: false,
    isNewArrival: true
  },
  {
    id: "bk-14",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    category: "Business",
    price: 399,
    originalPrice: 550,
    rating: 4.7,
    reviewsCount: 2100,
    image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?auto=format&fit=crop&w=600&q=80",
    description: "Explodes the myth that you need to earn a high income to become rich and explains the difference between working for money and having your money work for you.",
    isBestseller: true,
    isNewArrival: false
  },
  {
    id: "bk-15",
    title: "Cosmos",
    author: "Carl Sagan",
    category: "Science",
    price: 599,
    originalPrice: 799,
    rating: 4.9,
    reviewsCount: 630,
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
    description: "Retraces the 15 billion years of cosmic evolution that have transformed matter into consciousness, exploring science, history, philosophy, and human wonder.",
    isBestseller: false,
    isNewArrival: false
  }
];

// ── State Management & LocalStorage Controls ───────────────────────────
function getStoredBooks() {
  const data = localStorage.getItem('bookhub_books');
  return data ? JSON.parse(data) : DEFAULT_BOOKS;
}

function saveStoredBooks(books) {
  localStorage.setItem('bookhub_books', JSON.stringify(books));
}

function getCart() {
  const data = localStorage.getItem('bookhub_cart');
  return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
  localStorage.setItem('bookhub_cart', JSON.stringify(cart));
  updateHeaderBadges();
}

function getWishlist() {
  const data = localStorage.getItem('bookhub_wishlist');
  return data ? JSON.parse(data) : [];
}

function saveWishlist(wishlist) {
  localStorage.setItem('bookhub_wishlist', JSON.stringify(wishlist));
  updateHeaderBadges();
}

function getOrders() {
  const data = localStorage.getItem('bookhub_orders');
  return data ? JSON.parse(data) : [];
}

function saveOrders(orders) {
  localStorage.setItem('bookhub_orders', JSON.stringify(orders));
}

function getCurrentUser() {
  const data = localStorage.getItem('bookhub_current_user');
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('bookhub_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('bookhub_current_user');
  }
  updateUserUI();
}

// Global active filter states
let activeCategory = 'All';
let activeTab = 'all'; // 'all', 'bestsellers', 'newarrivals'
let currentSelectedBook = null;

// ── Application Initialization ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('bookhub_books')) {
    saveStoredBooks(DEFAULT_BOOKS);
  }
  renderBooks();
  updateHeaderBadges();
  updateUserUI();
  setupEventListeners();
});

// ── Navigation & Dynamic Header Logic ─────────────────────────────────
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Global Search Input Live Filter
  const searchInput = document.getElementById('globalSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  // User Dropdown Toggle
  const userMenuBtn = document.getElementById('userMenuBtn');
  const userDropdown = document.getElementById('userDropdown');
  if (userMenuBtn && userDropdown) {
    userMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      userDropdown.classList.toggle('show');
    });
    document.addEventListener('click', () => {
      userDropdown.classList.remove('show');
    });
  }
}

function updateUserUI() {
  const user = getCurrentUser();
  const guestContainer = document.getElementById('guestUserMenu');
  const loggedInContainer = document.getElementById('loggedInUserMenu');
  const userNameDisplay = document.getElementById('userNameDisplay');

  if (user) {
    if (guestContainer) guestContainer.style.display = 'none';
    if (loggedInContainer) loggedInContainer.style.display = 'block';
    if (userNameDisplay) userNameDisplay.textContent = user.name;
  } else {
    if (guestContainer) guestContainer.style.display = 'block';
    if (loggedInContainer) loggedInContainer.style.display = 'none';
  }
}

function updateHeaderBadges() {
  const cart = getCart();
  const wishlist = getWishlist();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');

  if (cartBadge) {
    cartBadge.textContent = cartCount;
    cartBadge.style.display = cartCount > 0 ? 'inline-block' : 'none';
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = wishlistCount;
    wishlistBadge.style.display = wishlistCount > 0 ? 'inline-block' : 'none';
  }
}

// ── Rendering Book Grid ───────────────────────────────────────────────
function renderBooks(filteredList = null) {
  const booksGrid = document.getElementById('booksGrid');
  if (!booksGrid) return;

  const books = filteredList || getStoredBooks();
  const wishlist = getWishlist();

  let finalBooks = books;

  // Apply tab filter if no specific list was passed
  if (!filteredList) {
    if (activeTab === 'bestsellers') {
      finalBooks = finalBooks.filter(b => b.isBestseller);
    } else if (activeTab === 'newarrivals') {
      finalBooks = finalBooks.filter(b => b.isNewArrival);
    }

    if (activeCategory !== 'All') {
      finalBooks = finalBooks.filter(b => b.category.toLowerCase() === activeCategory.toLowerCase());
    }
  }

  if (finalBooks.length === 0) {
    booksGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fas fa-book-open" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h3>No books found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or category filter.</p>
        <button class="btn-primary" style="margin-top: 1rem;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  booksGrid.innerHTML = finalBooks.map(book => {
    const isWishlisted = wishlist.includes(book.id);
    const starHTML = generateStarRating(book.rating);

    return `
      <div class="book-card">
        <div class="book-badge-container">
          ${book.isBestseller ? '<span class="badge-tag badge-bestseller">Best Seller</span>' : ''}
          ${book.isNewArrival ? '<span class="badge-tag badge-new">New</span>' : ''}
        </div>
        <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${book.id}')" title="Add to Wishlist">
          <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="book-image-wrapper" onclick="openBookDetailsModal('${book.id}')" style="cursor:pointer">
          <img src="${book.image}" alt="${book.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'">
        </div>
        <div class="book-details">
          <span class="book-category">${book.category}</span>
          <h3 class="book-title" onclick="openBookDetailsModal('${book.id}')" style="cursor:pointer" title="${book.title}">${book.title}</h3>
          <p class="book-author">by ${book.author}</p>
          <div class="book-rating">
            ${starHTML}
            <span class="rating-count">(${book.rating})</span>
          </div>
          <div class="book-footer">
            <div class="book-price-box">
              <span class="price-current">₹${book.price}</span>
              ${book.originalPrice ? `<span class="price-original">₹${book.originalPrice}</span>` : ''}
            </div>
            <div class="book-card-actions">
              <button class="btn-icon" onclick="openBookDetailsModal('${book.id}')" title="View Details">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn-add-cart" onclick="addToCart('${book.id}')">
                <i class="fas fa-shopping-cart"></i> Add
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function generateStarRating(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i - rating <= 0.5) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

// ── Search & Filter Logic ─────────────────────────────────────────────
function performSearch(query = null) {
  const q = (query !== null ? query : document.getElementById('globalSearch').value).trim().toLowerCase();
  const allBooks = getStoredBooks();

  if (!q) {
    renderBooks();
    return;
  }

  const results = allBooks.filter(book =>
    book.title.toLowerCase().includes(q) ||
    book.author.toLowerCase().includes(q) ||
    book.category.toLowerCase().includes(q)
  );

  renderBooks(results);
}

function filterByCategory(category) {
  activeCategory = category;
  document.querySelectorAll('.chip').forEach(chip => {
    chip.classList.toggle('active', chip.dataset.category === category);
  });
  renderBooks();
}

function filterByTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  renderBooks();
}

function resetFilters() {
  activeCategory = 'All';
  activeTab = 'all';
  const searchInput = document.getElementById('globalSearch');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'All'));
  document.querySelectorAll('.tab-btn').forEach(t => t.classList.toggle('active', t.dataset.tab === 'all'));
  renderBooks();
}

// ── Book Details Modal ────────────────────────────────────────────────
function openBookDetailsModal(bookId) {
  const books = getStoredBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  currentSelectedBook = book;
  const container = document.getElementById('modalBookDetailsContent');

  container.innerHTML = `
    <div class="book-details-layout">
      <div class="details-image">
        <img src="${book.image}" alt="${book.title}">
      </div>
      <div class="details-info">
        <span class="book-category">${book.category}</span>
        <h2>${book.title}</h2>
        <p class="details-author">by <strong>${book.author}</strong></p>
        <div class="book-rating" style="margin-bottom: 0.5rem;">
          ${generateStarRating(book.rating)}
          <span class="rating-count">(${book.rating} / 5 stars - ${book.reviewsCount} reviews)</span>
        </div>
        <div class="details-price">
          ₹${book.price}
          ${book.originalPrice ? `<span style="font-size: 1rem; color: var(--text-light); text-decoration: line-through; margin-left: 8px;">₹${book.originalPrice}</span>` : ''}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1.25rem; line-height: 1.6;">${book.description}</p>
        
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <div class="qty-picker">
            <button class="qty-btn" onclick="adjustModalQty(-1)">-</button>
            <input type="number" id="modalQtyInput" class="qty-input" value="1" min="1" max="10" readonly>
            <button class="qty-btn" onclick="adjustModalQty(1)">+</button>
          </div>
          <button class="btn-primary" onclick="addModalBookToCart()"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
          <button class="btn-secondary" style="background: var(--navy-dark); color: #fff;" onclick="buyNowModal()"><i class="fas fa-bolt"></i> Buy Now</button>
        </div>
      </div>
    </div>
  `;

  openModal('bookDetailsModal');
}

function adjustModalQty(change) {
  const input = document.getElementById('modalQtyInput');
  if (!input) return;
  let val = parseInt(input.value) + change;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}

function addModalBookToCart() {
  if (!currentSelectedBook) return;
  const qtyInput = document.getElementById('modalQtyInput');
  const qty = qtyInput ? parseInt(qtyInput.value) : 1;
  addToCart(currentSelectedBook.id, qty);
  closeModal('bookDetailsModal');
}

function buyNowModal() {
  if (!currentSelectedBook) return;
  addModalBookToCart();
  openCartModal();
}

// ── Cart Functionality ────────────────────────────────────────────────
function addToCart(bookId, quantity = 1) {
  const books = getStoredBooks();
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  let cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.id === bookId);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: book.id,
      title: book.title,
      price: book.price,
      image: book.image,
      author: book.author,
      quantity: quantity
    });
  }

  saveCart(cart);
  showToast(`"${book.title}" added to cart!`, 'success');
}

function updateCartQty(bookId, change) {
  let cart = getCart();
  const item = cart.find(i => i.id === bookId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== bookId);
  }

  saveCart(cart);
  renderCartModal();
}

function removeFromCart(bookId) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== bookId);
  saveCart(cart);
  renderCartModal();
  showToast("Item removed from cart", "info");
}

function openCartModal() {
  renderCartModal();
  openModal('cartModal');
}

function renderCartModal() {
  const cart = getCart();
  const container = document.getElementById('cartItemsContainer');
  const totalAmountEl = document.getElementById('cartTotalAmount');
  const grandTotalEl = document.getElementById('cartGrandTotal');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i class="fas fa-shopping-cart" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <p style="color: var(--text-muted);">Your shopping cart is empty.</p>
      </div>
    `;
    if (totalAmountEl) totalAmountEl.textContent = '₹0';
    if (grandTotalEl) grandTotalEl.textContent = '₹0';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    return `
      <div class="cart-item-row">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>₹${item.price} each</p>
        </div>
        <div class="qty-picker">
          <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="padding: 0 10px; font-weight:700;">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
        </div>
        <div style="font-weight:700; width:70px; text-align:right;">₹${itemTotal}</div>
        <button onclick="removeFromCart('${item.id}')" style="background:none; border:none; color:var(--danger); font-size:1rem; cursor:pointer;"><i class="fas fa-trash"></i></button>
      </div>
    `;
  }).join('');

  const shipping = subtotal > 499 ? 0 : 50;
  const grandTotal = subtotal + shipping;

  if (totalAmountEl) totalAmountEl.textContent = `₹${subtotal}`;
  if (grandTotalEl) grandTotalEl.textContent = `₹${grandTotal} ${shipping === 0 ? '(Free Delivery)' : '(+ ₹50 Shipping)'}`;
}

// ── Wishlist Functionality ─────────────────────────────────────────────
function toggleWishlist(bookId) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(bookId);
  const books = getStoredBooks();
  const book = books.find(b => b.id === bookId);

  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from Wishlist`, 'info');
  } else {
    wishlist.push(bookId);
    showToast(`Added "${book ? book.title : 'Book'}" to Wishlist!`, 'success');
  }

  saveWishlist(wishlist);
  renderBooks();
  if (document.getElementById('wishlistModal').classList.contains('active')) {
    renderWishlistModal();
  }
}

function openWishlistModal() {
  renderWishlistModal();
  openModal('wishlistModal');
}

function renderWishlistModal() {
  const wishlist = getWishlist();
  const books = getStoredBooks();
  const container = document.getElementById('wishlistItemsContainer');

  const wishlistedBooks = books.filter(b => wishlist.includes(b.id));

  if (wishlistedBooks.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i class="fas fa-heart" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <p style="color: var(--text-muted);">Your wishlist is empty.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = wishlistedBooks.map(book => `
    <div class="cart-item-row">
      <img src="${book.image}" alt="${book.title}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${book.title}</h4>
        <p>by ${book.author}</p>
        <span style="font-weight:700; color:var(--navy-dark);">₹${book.price}</span>
      </div>
      <div style="display:flex; gap:0.5rem;">
        <button class="btn-add-cart" onclick="addToCart('${book.id}'); toggleWishlist('${book.id}');">Move to Cart</button>
        <button onclick="toggleWishlist('${book.id}')" style="background:none; border:none; color:var(--danger); font-size:1.1rem; cursor:pointer;"><i class="fas fa-times"></i></button>
      </div>
    </div>
  `).join('');
}

// ── Login / Register Auth Modals ──────────────────────────────────────
function openAuthModal(type = 'login') {
  switchAuthTab(type);
  openModal('authModal');
}

function switchAuthTab(type) {
  const loginForm = document.getElementById('loginFormContainer');
  const registerForm = document.getElementById('registerFormContainer');
  const loginTab = document.getElementById('tabLoginBtn');
  const registerTab = document.getElementById('tabRegisterBtn');

  if (type === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
  }
}

function handleLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Simple demo login
  const users = JSON.parse(localStorage.getItem('bookhub_users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);

  if (user || (email === 'user@bookhub.com' && password === 'user123')) {
    const loggedUser = user || { name: 'Student User', email: email };
    setCurrentUser(loggedUser);
    closeModal('authModal');
    showToast(`Welcome back, ${loggedUser.name}!`, 'success');
  } else {
    showToast('Invalid email or password. (Demo user: user@bookhub.com / user123)', 'error');
  }
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();

  if (!name || !email || !password) {
    showToast('Please fill in all registration fields.', 'error');
    return;
  }

  const users = JSON.parse(localStorage.getItem('bookhub_users') || '[]');
  users.push({ name, email, password });
  localStorage.setItem('bookhub_users', JSON.stringify(users));

  setCurrentUser({ name, email });
  closeModal('authModal');
  showToast(`Account created successfully! Welcome, ${name}.`, 'success');
}

function logoutUser() {
  setCurrentUser(null);
  showToast('Logged out successfully', 'info');
}

// ── Checkout Flow ─────────────────────────────────────────────────────
function openCheckoutModal() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error');
    return;
  }

  const user = getCurrentUser();
  if (user) {
    document.getElementById('checkoutName').value = user.name || '';
    document.getElementById('checkoutEmail').value = user.email || '';
  }

  closeModal('cartModal');
  renderCheckoutSummary();
  openModal('checkoutModal');
}

function renderCheckoutSummary() {
  const cart = getCart();
  const summaryContainer = document.getElementById('checkoutOrderSummary');
  let subtotal = 0;

  summaryContainer.innerHTML = cart.map(item => {
    const total = item.price * item.quantity;
    subtotal += total;
    return `
      <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:0.5rem;">
        <span>${item.title} (x${item.quantity})</span>
        <span style="font-weight:700;">₹${total}</span>
      </div>
    `;
  }).join('');

  const shipping = subtotal > 499 ? 0 : 50;
  const grandTotal = subtotal + shipping;

  document.getElementById('checkoutSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'FREE' : `₹${shipping}`;
  document.getElementById('checkoutGrandTotal').textContent = `₹${grandTotal}`;
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('checkoutName').value.trim();
  const email = document.getElementById('checkoutEmail').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const city = document.getElementById('checkoutCity').value.trim();
  const pincode = document.getElementById('checkoutPincode').value.trim();
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

  const cart = getCart();
  if (cart.length === 0) return;

  let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let shipping = subtotal > 499 ? 0 : 50;
  let totalAmount = subtotal + shipping;

  const orderId = 'BH-' + Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  const newOrder = {
    orderId,
    date: orderDate,
    customer: { name, email, phone, address, city, pincode },
    items: cart,
    totalAmount,
    paymentMethod,
    status: 'Processing'
  };

  const orders = getOrders();
  orders.unshift(newOrder);
  saveOrders(orders);

  // Clear cart after order placement
  saveCart([]);

  closeModal('checkoutModal');

  // Display Success Alert Modal
  document.getElementById('placedOrderId').textContent = orderId;
  openModal('orderSuccessModal');
}

// ── My Orders Section ──────────────────────────────────────────────────
function openMyOrdersModal() {
  renderMyOrders();
  openModal('myOrdersModal');
}

function renderMyOrders() {
  const orders = getOrders();
  const container = document.getElementById('myOrdersContainer');

  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem;">
        <i class="fas fa-box-open" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <p style="color: var(--text-muted);">You haven't placed any orders yet.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders.map(order => {
    let statusClass = 'status-processing';
    if (order.status === 'Shipped') statusClass = 'status-shipped';
    if (order.status === 'Delivered') statusClass = 'status-delivered';

    return `
      <div class="order-card">
        <div class="order-header">
          <div>
            <strong style="color:var(--navy-dark); font-size:1rem;">Order #${order.orderId}</strong>
            <span style="font-size:0.8rem; color:var(--text-muted); margin-left:8px;">${order.date}</span>
          </div>
          <span class="status-badge ${statusClass}">${order.status}</span>
        </div>
        <div style="margin-bottom: 0.75rem;">
          ${order.items.map(i => `
            <div style="display:flex; justify-content:space-between; font-size:0.85rem; padding:0.2rem 0;">
              <span>• ${i.title} <strong>x${i.quantity}</strong></span>
              <span>₹${i.price * i.quantity}</span>
            </div>
          `).join('')}
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:0.5rem; font-weight:700;">
          <span>Payment: ${order.paymentMethod}</span>
          <span style="color:var(--primary); font-size:1.05rem;">Total: ₹${order.totalAmount}</span>
        </div>
      </div>
    `;
  }).join('');
}

// ── Admin Dashboard Controls ──────────────────────────────────────────
function openAdminModal() {
  const isAdmin = localStorage.getItem('bookhub_admin_logged');
  if (isAdmin === 'true') {
    renderAdminDashboard();
    openModal('adminDashboardModal');
  } else {
    openModal('adminLoginModal');
  }
}

function handleAdminLogin(event) {
  event.preventDefault();
  const u = document.getElementById('adminUsername').value.trim();
  const p = document.getElementById('adminPassword').value.trim();

  if (u === 'admin' && p === 'admin123') {
    localStorage.setItem('bookhub_admin_logged', 'true');
    closeModal('adminLoginModal');
    renderAdminDashboard();
    openModal('adminDashboardModal');
    showToast('Admin logged in successfully', 'success');
  } else {
    showToast('Invalid Admin credentials! (Use admin / admin123)', 'error');
  }
}

function logoutAdmin() {
  localStorage.removeItem('bookhub_admin_logged');
  closeModal('adminDashboardModal');
  showToast('Admin logged out', 'info');
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`adminTabBtn-${tabName}`).classList.add('active');

  document.getElementById('adminTabBooks').style.display = tabName === 'books' ? 'block' : 'none';
  document.getElementById('adminTabOrders').style.display = tabName === 'orders' ? 'block' : 'none';
}

function renderAdminDashboard() {
  const books = getStoredBooks();
  const orders = getOrders();

  // Admin Stats Counters
  document.getElementById('adminStatBooks').textContent = books.length;
  document.getElementById('adminStatOrders').textContent = orders.length;

  const totalRev = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  document.getElementById('adminStatRevenue').textContent = `₹${totalRev}`;

  // Admin Books Table
  const booksTbody = document.getElementById('adminBooksTableBody');
  booksTbody.innerHTML = books.map(b => `
    <tr>
      <td><img src="${b.image}" style="width:36px; height:45px; object-fit:cover; border-radius:4px;"></td>
      <td><strong>${b.title}</strong></td>
      <td>${b.author}</td>
      <td>${b.category}</td>
      <td>₹${b.price}</td>
      <td>
        <button onclick="editAdminBook('${b.id}')" style="background:var(--info); color:#fff; border:none; padding:4px 8px; border-radius:4px; margin-right:4px;"><i class="fas fa-edit"></i></button>
        <button onclick="deleteAdminBook('${b.id}')" style="background:var(--danger); color:#fff; border:none; padding:4px 8px; border-radius:4px;"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');

  // Admin Orders Table
  const ordersTbody = document.getElementById('adminOrdersTableBody');
  ordersTbody.innerHTML = orders.map(o => `
    <tr>
      <td>#${o.orderId}</td>
      <td>${o.customer.name}<br><small>${o.customer.phone}</small></td>
      <td>${o.date}</td>
      <td>₹${o.totalAmount}</td>
      <td>
        <select onchange="updateOrderStatus('${o.orderId}', this.value)" style="padding:4px 8px; font-size:0.8rem;">
          <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
          <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
          <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
        </select>
      </td>
    </tr>
  `).join('');
}

function handleAddBookSubmit(event) {
  event.preventDefault();
  const id = document.getElementById('adminBookId').value || 'bk-' + Date.now();
  const title = document.getElementById('adminBookTitle').value.trim();
  const author = document.getElementById('adminBookAuthor').value.trim();
  const category = document.getElementById('adminBookCategory').value;
  const price = parseFloat(document.getElementById('adminBookPrice').value);
  const originalPrice = parseFloat(document.getElementById('adminBookOriginalPrice').value) || price + 150;
  const image = document.getElementById('adminBookImage').value.trim() || 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';
  const description = document.getElementById('adminBookDesc').value.trim() || 'No detailed description available.';

  let books = getStoredBooks();
  const existingIndex = books.findIndex(b => b.id === id);

  const bookObj = {
    id,
    title,
    author,
    category,
    price,
    originalPrice,
    rating: 4.8,
    reviewsCount: 10,
    image,
    description,
    isBestseller: false,
    isNewArrival: true
  };

  if (existingIndex > -1) {
    books[existingIndex] = bookObj;
    showToast('Book updated successfully!', 'success');
  } else {
    books.unshift(bookObj);
    showToast('New book added successfully!', 'success');
  }

  saveStoredBooks(books);
  renderBooks();
  renderAdminDashboard();
  resetAdminBookForm();
}

function editAdminBook(bookId) {
  const books = getStoredBooks();
  const b = books.find(item => item.id === bookId);
  if (!b) return;

  document.getElementById('adminBookId').value = b.id;
  document.getElementById('adminBookTitle').value = b.title;
  document.getElementById('adminBookAuthor').value = b.author;
  document.getElementById('adminBookCategory').value = b.category;
  document.getElementById('adminBookPrice').value = b.price;
  document.getElementById('adminBookOriginalPrice').value = b.originalPrice || '';
  document.getElementById('adminBookImage').value = b.image;
  document.getElementById('adminBookDesc').value = b.description;

  document.getElementById('adminFormTitle').textContent = 'Edit Book';
}

function deleteAdminBook(bookId) {
  if (!confirm('Are you sure you want to delete this book?')) return;
  let books = getStoredBooks();
  books = books.filter(b => b.id !== bookId);
  saveStoredBooks(books);
  renderBooks();
  renderAdminDashboard();
  showToast('Book deleted from catalog', 'info');
}

function resetAdminBookForm() {
  document.getElementById('adminBookForm').reset();
  document.getElementById('adminBookId').value = '';
  document.getElementById('adminFormTitle').textContent = 'Add New Book';
}

function updateOrderStatus(orderId, newStatus) {
  let orders = getOrders();
  const order = orders.find(o => o.orderId === orderId);
  if (order) {
    order.status = newStatus;
    saveOrders(orders);
    showToast(`Order #${orderId} status updated to ${newStatus}`, 'success');
  }
}

// ── Generic Modal Controller ──────────────────────────────────────────
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modals when backdrop is clicked
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ── Toast System ──────────────────────────────────────────────────────
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = 'fa-info-circle';
  if (type === 'success') icon = 'fa-check-circle';
  if (type === 'error') icon = 'fa-exclamation-circle';

  toast.innerHTML = `<i class="fas ${icon}" style="font-size:1.1rem; color:var(--accent);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
