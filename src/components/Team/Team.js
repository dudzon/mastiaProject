import React from 'react'
import classes from './Team.module.scss';
import Member from './Member/Member'
import person1 from './../../assets/person1.jpg'
import person2 from './../../assets/person2.jpg'
import person3 from './../../assets/person3.jpg'
import person4 from './../../assets/person4.jpg'
const members = [
        {
            id: Math.random(),
            picture: person1,
            alt: 'Picture of businessman walking in a misty city',
            name:'John McCoist',
            position:'Chief technical officer'
        },
        {
            id:Math.random(),
            picture: person2,
            alt: 'Picture of a young person staring at something',
            name:'Max Puttner',
            position:'Chief analyst'
        },
        {
            id:Math.random(),
            picture: person3,
            alt:'Picture of a middleaged man giving a lecture',
            name:'Mark Evans',
            position:'HR Specialist'
        },
        {
            id:Math.random(),
            picture: person4,
            alt:'Picture of a young man holding a camera',
            name:'David Probst',
            position:'Senior Frontend Engineer'
        }
];

const Team  = () => {
    const team = members.map( member => {
        return <Member key = { member.id }
                       src = { member.picture }
                       alt = { member.alt }
                       name = { member.name }
                       position = { member.position }
                />
        })

        return(
        <div className={classes.Team}>
          <div className={classes.Team__wrapper}>
              <h3 className={classes.Team__title}>Our crazy Team</h3>
              <div className={classes.Team__members}>
                  { team }
              </div>
          </div>
      </div>
  )
}


export default Team
