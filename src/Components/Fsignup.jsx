import React from "react";
import './Facebook.css';
import {Link} from "react-router-dom";

export default function signup() {
    return(
        <div className="main2">
            <h2 className="header">facebook</h2>
            <form className="form2">
                <h2 className="center">Create a new account</h2><br/>
                <p className="firstline">It's quick and easy.</p><br/>
                <input type="text" placeholder="First Name" className="name"/>
                <input type="text" placeholder="Surname" className="surname"/><br/><br/>
                <sup className="dob">Date of Birth?</sup><br/>
                <select className="date">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                </select>
                <select className="month">
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>
                <select className="year">
                    <option>2025</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                    <option>2010</option>
                </select><br/><br/>
                <sup className="gender">Gender?</sup><br/>
                <div className="male">
                Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="Gender"/></div>
                <div className="female">
                Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="Gender"/></div>
                <div className="trans">
                Trans-Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="Gender"/></div><br/><br/>
                <input type="text" placeholder="Mobile Number or Email Address" className="text"/><br/><br/>
                <input type="text" placeholder="New Password" className="text1"/><br/>
                <div className="last">
                <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                </div>
                <div className="last1">           
                <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
                 You may receive SMS notifications from us and can opt out at any time.</p>
                     </div>  
                <button className="btn3">Sign Up</button><br/>
                <p className="acc"><Link to="/Flogin" className="text-link1">Already have an account?</Link></p>
            </form>
        </div>
    )
}