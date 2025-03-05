import React, { useContext } from "react";
import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiCartAdd } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FiShoppingCart } from "react-icons/fi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase"

MdOutlineShoppingCart;
function Header() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const totatItems = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={styles.header__fixed}>
      <section className={styles.header__container}>
        <div className={styles.logo__container}>
          {/* Logo */}
          <Link to="/" id="home">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="amazon logo"
            />
          </Link>
          {/* delivery */}
          <span>
            {/* icon */}
            <div className={styles.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </span>
        </div>
        <div className={styles.search}>
          {/* Search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Amazon" />
          {/* search icon */}
          {<FaSearch />}
        </div>
        <div>
          {/* right side link */}
          <div className={styles.order__container}>
            {/* Language */}
            <Link to="" className={styles.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14580.png"
                alt="english language logo"
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>hello {user?.email?.split("@")[0]}</p>
                    <span onClick={()=>auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={styles.cart}>
              {/* icon */}
              {<BiCartAdd />}
              {/* <span>{totatItems}</span> */}
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
