# Droom React App
https://docs.google.com/document/d/1bsorUpw2ouQi56Zl-gvDdWeeLAQfQX9skcXsw2bv6KU/edit?ts=5dcb6192#

https://frontend-theta-ten.now.sh/signup

What problem does your app solve?
This product will make job searching easy and fun.
Be as specific as possible; how does your app solve the problem?
By providing all the information pertinent to the job, on a single page.  Auto-apply to jobs.
Makes it quicker, swipe thru multiple jobs.
What is the mission statement?
Swipe for your check.


Features

What features are required for your minimum viable product
- Onboarding processing for a job-seeker
- Ability to easily create/setup a user profile (including name, occupation field, past experiences, interests, etc.)
- Onboarding processing for companies
- Ability to easily create / setup a company profile and current job listing
- Ability to easily edit / update profiles and job listing
- Ability to delete items
- Ability for both user types to swipe right or left (or tap a check or x button) when they see a profile page or job posting/company page.
- A page to view your matches.
What features may you wish to put in a future release?
Ability to message a match
Ability to upload a profile picture
Ability to login via LinkedIn
Ability to apply, upload resume, etc
What do the top 3 similar apps do for their users?
Indeed - allows you to job search and post resume, and filter by location
Zip Recruiter - notifies you when you and a company match, identifies top matches
Tinder - notifies you when you and an interest match up, swipe feature


Design - Planning

Optional but highly recommended Please refer to this document:
Build Weeks: Planning & Design Worksheet (How to build a beautiful application)
What design system will you use?
Balsamiq
What will your user flow be?
Marketing Website
Job-Seeker
Landing Page features - 
prompted with login | signup 
Job-Seeker Signup = name, email, etc. -> SUBMIT -> display list of matching jobs  
Login = display list of matching jobs  
Display Page - “✓” to match | “X” to unmatch
X = disappear 
✓ = continue to other job listings
“Matches” button displays separate view (Match Page) 
        Match Page = details of each job, contact info, etc
            Logout = return to Landing Page (App)
            Return to Display Page
        Profile Page (Global)
            Edit profile
Exit features - Select a match and logout
Employer
Landing page features - 
prompted with login | Employer signup 
Employer Signup = name, role, HRemail, company, etc. -> SUBMIT -> display list of matching jobs  
Login = display list of matching jobs  
Dashboard Page - 
    Tab to search job-seekers | Tab to add job-listings
                Tab to search job-seekers -> “✓” to match | “X” to unmatch
                Tab to add job-listings -> Form to add new job listing
Tab to return to dashboard
    Edit | Delete job postings on each card 
X = disappear 
✓ = continue to other job listings
“Matches” button displays separate view (Match Page) 
        Match Page = details of each job, contact info, etc
            Logout = return to Landing Page (App)
            Return to Display Page
        Profile Page (Global)
            Edit profile

Exit features - Select a match and logout
What is the URL to your wireframes?


Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
UI (Marketing Page)
    HTML
CSS
    LESS
    
    
React (App)
Styled-components
Material Kit/ Material UI
Reactstrap/ Bootstrap
Semantic UI React
Axios
Reboss?
Elemental UI
Redux
Context API
React Router DOM
JSON Web Token

Do APIs require you to contact its maintainer to gain access?
No
Are you required to pay to use the API?
No
Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
No
Target Audience

Who is your target audience? Be specific.

Active job-seekers
Companies actively hiring
What feedback have you gotten from potential users?
N/A
Have you validated the problem and your solution with your target audience? How?
No
Research

Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.
