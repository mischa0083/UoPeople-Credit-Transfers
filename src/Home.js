import data from './data.json'

const Home = () => {

    return (
        <div className="home">
            <p>This site documents transferable options to taking courses at UoPeople.</p>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th>Proctored?</th>
                        <th>Course Name</th>
                        <th>Vendor</th>
                        <th>Vendor Course</th>
                        <th>Valid Dates</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map(function (key, index) {
                        return (
                            data[key].transferable_credits.map(function (key2) {
                                return (
                                    <tr key={index} className="active-row">
                                        <td>
                                            {key}
                                        </td>
                                        <td>
                                            {data[key].isProctored? "Yes" : "No"}
                                        </td>
                                        <td>
                                            <a href={data[key].url}>
                                                {data[key].name}
                                            </a>
                                        </td>
                                        <td>
                                            {!!(key2.institution)? key2.institution : "N/A"}
                                        </td>
                                        <td>
                                            <a href={key2.url}>
                                                {key2.name}
                                            </a>
                                        </td>
                                        <td>
                                            <a href={key2.ace_url}>
                                                {key2.ace_valid_dates[0].start_date + " - " + key2.ace_valid_dates[0].end_date}
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        
                            )
                    })
                    }
                </tbody>
            </table>
            <br/>
            Have a course you want to add? <a href="https://github.com/mischa0083/UoPeople-Credit-Transfers">Open an Issue or a Pull Request</a>, <i>and please make sure to attach proof (i.e. transcripts, etc.)</i>.
        </div>

    );
}

export default Home;