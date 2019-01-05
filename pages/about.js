import Meta from '../components/Meta';
import Layout from '../components/Layout';

const about = () => (
    <div>
        <Meta/>
        <Layout/>
        <div  style={{'paddingLeft':'10px'}}>
            <h1>What is this?</h1>
            <p>ESL Bot aggregates ESL teaching jobs from several webites and provides an easily searchable list of jobs, which link back to the websites on which they were posted. Jobs are automatically crawled and updated daily.</p>
            <h1>I don't want you to aggregate my jobs</h1>
            <p>No problem. Send me an email at admin@eslbot.com</p>    
        </div>
    </div>
)

export default about;