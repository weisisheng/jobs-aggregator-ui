const jobList = (props) => {
  return (
    <div>
      {props.data.map(el => {
        return (
          <div key={el.link} style={{'margin':'10px 10px 10px 10px'}}>
            <span><a href={el.link} target="_blank" style={{'textDecoration':'none','fontSize':'18px'}}>{el.text}</a></span><br/>
            <span style={{'fontSize':'14px'}}>{el.location}</span><br/>
            <span style={{'fontSize':'12px', 'paddingRight':'6px', 'fontWeight':'bold'}}><a href={el.websiteLink} style={{'color':'black','textDecoration':'none'}} target="_blank">{el.website}</a></span>
            <span style={{'fontSize':'12px'}}>Posted {new Date(el.dateAdded).toLocaleDateString('en-US')}</span><br/>
            <hr/>
          </div>
        )
      })}
    </div>
  )
};

export default jobList;