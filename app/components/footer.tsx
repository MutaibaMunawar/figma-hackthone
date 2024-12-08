const Footer = () => {
    return (
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Find a Store
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Become a Member
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Sign Up for Email
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Send Us Feedback
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Student Discounts
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      Order Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Payment Options
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us On Nike.com Inquiries
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact Us On All Other Inquiries
                    </a>
                  </li>
                </ul>
              </div>
  
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white">
                      News
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Investors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Sustainability
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  

          <div className="flex flex-col items-start space-y-4 pl-[300px]">
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <img src="/twiter icon.png" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <img src="/fb icon.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <img src="/icon pic.png" alt="icon pic" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <img src="/insta icon.png" alt="insta" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
          <div className="flex justify-center space-x-6 mt-2">
            <a href="#" className="hover:text-white">
              Guides
            </a>
            <a href="#" className="hover:text-white">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Nike Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  