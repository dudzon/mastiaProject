import React from 'react'
import classes from'./Testimonial.module.scss'
import Link from 'gatsby-link'
const Testimonial = () => {
  return (
    <div className={classes.testimonial}>
      <div className={ classes.testimonial__wrapper }>
        <div className = { classes.testimonial__picture }></div>
        <div className = { classes.testimonial__desc}>
            <h3 className = { classes.testimonial__title }>Who we are?</h3>
            <p className = {classes.testimonial__paragraph }>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid</p>
            <p className = { classes.testimonial__paragraph }>Eacommodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
            <button className = {classes.testimonial__button}> <Link to='/projects'>Our Services</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
