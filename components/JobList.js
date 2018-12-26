const jobList = (props) => {
  return (
    <div>
      {props.data.map(el => {
        return (
          <div key={el.link} style={{'margin':'10px 0 10px 0'}}>
            <span><a href={el.link} target="_blank" style={{'textDecoration':'none'}}>{el.text}</a></span><br/>
            <span style={{'fontSize':'12px'}}>{el.location}</span><br/>
            <span style={{'fontSize':'10px', 'paddingRight':'6px'}}><a href={el.websiteLink} style={{'textDecoration':'none'}} target="_blank">{el.website}</a></span>
            <span style={{'fontSize':'10px'}}>Posted {new Date(el.dateAdded).toLocaleDateString('en-US')}</span><br/>
            <hr/>
          </div>
        )
      })}
    </div>
  )
};

export default jobList;