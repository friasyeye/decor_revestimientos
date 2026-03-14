const Footer = () => {
  return (
    <footer className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div>
          <h3>Links</h3>
          <ul className="list-none p-0">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h3>Address</h3>
          <p>123 Street Name, City, Country</p>
        </div>
      </div>
      <div className="mt-8 text-center pt-4 border-t border-black">
        <p>&copy; {new Date().getFullYear()} Master Template. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
