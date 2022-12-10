# Team Egg

## Team Roles

- Troy Schotter: PM
- Graham Bridges: Developer
- Brennan Poitras: Developer
- Owen Bellew: Designer

## Mission Statement

Creating user-friendly platforms for student collaboration and discussion


## Problem Statement
Students often lack the information and skills to choose classes that teach interesting material in a way that is well received given what they know, their other time commitments, and what teaching strategies work best for them. It’s difficult for a student to walk into an elective they don't know much about. It’s possible to find themselves committing to the course and credits, then wanting to drop when they realize the course is far more complicated, overwhelming, or subject matter not suited to their learning style (Online classes, synchronous, asynchronous, etc). 

Dropping courses can lead to severe consequences such as;

- Losing a scholarship that requires you take a certain number of credit hours if you are unable to replace the dropped course due to class availability or scheduling conflict.
- Losing money spent on the course if dropped after the refund date.
- A black mark on your GPA if dropped with a withdrawal-fail.
- Falling behind on your degree and needing to make it up on a later semester or be forced to take another semester before graduating.

To make well informed decisions, a student could find another student like them who took the class, but existing solutions don’t facilitate that. Advisors give out advice regarding course loads and descriptions but they can only offer their perspective from an advisor or instructor position which can be insufficient for the specific student’s needs. How can we build a reliable and organized student-led knowledge-base regarding difficulty, pacing, work load, enjoyment, and relevancy to solve the ignorance students are experiencing when picking a course?

## Blackbear Square Initial Setup
 - Download Repository
 - install node on machine. https://nodejs.org/en/download/
 - run "npm install" in client folder
 - create firebase account
 - on firebase account set up log in with google authentication
 - on firebase account set up a firestore database with the rules described in "firebaseRules.txt"
 - paste configuration information into firebase-config.tsx located in client directory
 - Run site and have administrators log into site for the first time to discover uid.
 - On firebase server, look at StandardUser collection and note the uid user information. Ensure this matches up with what's printed on the console of the
    client of the administrator.
 - Create an AdvancedUser collection, each document should have a document id equal to the uid of the user it represents. Set the master administrator with
     an accessLevel of 10 (see firebaseRules.txt for an example document of an administrator)
 - refer to the accessLevelRules.txt to see what each access level allows.
