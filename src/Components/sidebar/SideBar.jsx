import React from "react";

function SideBar() {
  return (
    
    <div id="sidebar-menu" className="my-2">
      <ul class="metismenu list-unstyled" id="side-menu">
        <li class="menu-title ">Menu</li>
        <li class="mm-active">
          <a class="waves-effect" href="/dashboard">
            <i class="bx bx-home-circle"></i>
            <span>Dashboards</span>
          </a>
        </li>
        <li class="">
          <a class="waves-effect" href="/candidates-list">
            <i class="bx bxs-user-circle"></i>
            <span class="badge rounded-pill bg-success float-end">3449797</span>
            <span>Total Products</span>
          </a>
        </li>
        <li class="">
          <a class="waves-effect" href="/employer-list">
            <i class="bx bx-building-house"></i>
            <span class="badge rounded-pill bg-warning float-end">9850</span>
            <span>Total sub categories  </span>
          </a>
        </li>


        
        {/* <li class="menu-title">EMPLOYERS</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-building-house"></i>
            <span>Employers</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="mdi mdi-youtube-subscription"></i>
            <span> Subscription</span>
          </a>
          <ul class="sub-menu" aria-expanded="false"></ul>
        </li>
        <li class="">
          <a class="waves-effect" href="/future-event-hiring-list">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span class="badge rounded-pill bg-danger float-end">23</span>
            <span>Future Event Hiring List</span>
          </a>
        </li>


         */}
        <li class="menu-title">JOBS</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-help-circle"></i>
            <span>Job FAQs</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-task"></i>
            <span>Jobs</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-shield"></i>
            <span>Premium Jobs</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-right-top-arrow-circle"></i>
            <span>Featured Jobs</span>
          </a>
        </li>
        <li class="menu-title">Government</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-stop-circle"></i>
            <span>Government Jobs</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-calendar-event"></i>
            <span>Govt. Department</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-calendar-event"></i>
            <span>Govt. Result</span>
          </a>
        </li>
        <li class="menu-title">CANDIDATES</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-user-detail"></i>
            <span>Candidates</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-card"></i>
            <span>Resume Samples</span>
          </a>
        </li>
        <li class="">
          <a class="waves-effect" href="/job-alert-list">
            <i class="bx bx-bell "></i>
            <span class="badge rounded-pill bg-danger float-end">318</span>
            <span>Job Alert List</span>
          </a>
        </li>
        <li class="menu-title">PACKAGES</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-widget"></i>
            <span>Job Posting</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="mdi mdi-youtube-subscription"></i>
            <span>Subscription Packages</span>
          </a>
        </li>
        <li class="menu-title">DISCOUNT AND COUPONS</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-book-content"></i>
            <span>Discount and Coupons</span>
          </a>
        </li>
        <li class="menu-title">ADVERTISEMENT</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-bell-ring"></i>
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fa fa-paint-brush" style={{fontSize: "18px"}}></i>
            <span>Banner</span>
          </a>
        </li>
        <li class="menu-title">ASTROLOGY SERVICES </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-cool"></i>
            <span>Astrology Services</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-help-circle"></i>
            <span>Astrology FAQ</span>
          </a>
        </li>
        <li class="menu-title">Study Abroad</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-plane-alt"></i>
            <span>Study Abroad Colleges</span>
          </a>
        </li>
        <li class="menu-title">Utilities</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-star"></i>
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-bolt-circle"></i>
            <span>Designation</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-rupee"></i>
            <span>Salary</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-dialpad-alt"></i>
            <span>Job Category</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-notepad"></i>
            <span>Jobs Type</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-user-voice"></i>
            <span>Interview Questions</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-test-tube"></i>
            <span>Practice Questions</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fas fa-blog"></i>
            <span>Blog</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-notepad"></i>
            <span>Article</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-help-circle"></i>
            <span>FAQs</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx bxs-chat"></i>
            <span>Testimonial</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxl-discourse"></i>
            <span>Discussion Forum</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-calendar"></i>
            <span>Calendars</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-pin"></i>
            <span>Country, State &amp; City</span>
          </a>
        </li>
        <li class="menu-title">OPERATION</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fa fa-question-circle" aria-hidden="true"></i>
            <span>Enquiries</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fas fa-comments"></i>
            <span>Feedback</span>
          </a>
        </li>
        <li class="menu-title">Affiliation</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fas fa-handshake"></i>
            <span>Affiliate</span>
          </a>
        </li>
        <li class="menu-title">COURSE MODULE</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fas fa-book-open"></i>
            <span>Course Module</span>
          </a>
        </li>
        <li class="menu-title">COMPONENTS</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="fa fa-tasks"></i>
            <span>CMS Page</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-cloud-download"></i>
            <span>Downloads</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bx-news"></i>
            <span>Press Release</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-news"></i>
            <span>News &amp; Updates</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-cog"></i>
            <span>Global Settings</span>
          </a>
        </li>
        <li class="menu-title">Administration</li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-user"></i>
            <span>Admin User</span>
          </a>
        </li>
        <li>
          <a class="has-arrow waves-effect">
            <i class="bx bxs-cog"></i>
            <span>Modules</span>
          </a>
        </li>
        <li class="text-danger">
          <a class="waves-effect active" href="/dashboard">
            <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
            <span class="text-danger">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
