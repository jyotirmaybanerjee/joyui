import React, {PropTypes} from 'react';
import NavBar from '../../../lib/nav/NavBar';
import RaisedButton from '../../../lib/button/RaisedButton';
import FloatingActionButton from '../../../lib/button/FloatingActionButton';
import Badge from '../../../lib/badge/Badge';
import Table from '../../../lib/table/Table';
import CircularProgress from '../../../lib/progress/CircularProgress';

export default class body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // Data for table
    var AllDatasets = [ { type: "Charts", category: "Transportation", name: "Pedestrian Counts", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "148 views" }, { type: "Maps", category: "Economy", name: "Money", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "90 views" }, { type: "Calendars", category: "Environment", name: "Tree Count", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "48 views" }, { type: "Filtered Views", category: "Property", name: "Housing", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "748 views" }, { type: "External Links", category: "Business", name: "Pedestrian Counts", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "8 views" }, { type: "Files & Documents", category: "Education", name: "Schools", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "34 views" }, { type: "Forms", category: "Public Safety", name: "Crime", description: "Bacon ipsum dolor amet brisket boudin short ribs, ham hock ribeye pork t-bone shoulder tri-tip chicken venison rump salami beef ribs.", popularity: "572 views" } ];
    return (
        <div>
            <article>
                <h4>NavBar</h4>
                <pre>
                    &lt;NavBar brand="JB"&gt;<br/>
                        &emsp;&lt;ul&gt;<br/>
                            &emsp;&emsp;&lt;li&gt;&lt;a&gt;Hi&lt;/a&gt;&lt;/li&gt;<br/>
                            &emsp;&emsp;&lt;li&gt;&lt;a&gt;hello&lt;/a&gt;&lt;/li&gt;<br/>
                            &emsp;&emsp;&lt;li&gt;&lt;a&gt;hey&lt;/a&gt;&lt;/li&gt;<br/>
                            &emsp;&emsp;&lt;li&gt;&lt;a&gt;yo&lt;/a&gt;&lt;/li&gt;<br/>
                        &emsp;&lt;/ul&gt;<br/>
                    &lt;/NavBar&gt;
                </pre>
                <h4>Result: </h4>
            </article>
            <NavBar brand="JB">
                <ul>
                    <li><a>Hi</a></li>
                    <li><a>hello</a></li>
                    <li><a>hey</a></li>
                    <li><a>yo</a></li>
                </ul>
            </NavBar>


            <article>
                <h4>RaisedButton</h4>
                <pre>
                    &lt;RaisedButton&gt; Default &lt;/RaisedButton&gt;<br/>
                    &lt;RaisedButton primary="true"&gt; Primary &lt;/RaisedButton&gt;<br/>
                    &lt;RaisedButton secondary="true"&gt; Secondary &lt;/RaisedButton&gt;<br/>
                    &lt;RaisedButton disabled="true"&gt; Disabled &lt;/RaisedButton&gt;<br/>
                    &lt;RaisedButton primary="true" fullWidth="true"&gt; Primary + Full Width &lt;/RaisedButton&gt;<br/>
                </pre>
                <h4>Result: </h4>
            </article>

            <RaisedButton> Default </RaisedButton>
            <RaisedButton primary="true"> Primary </RaisedButton>
            <RaisedButton secondary="true"> Secondary </RaisedButton>
            <RaisedButton disabled="true"> Disabled </RaisedButton>
            <RaisedButton primary="true" fullWidth="true"> Primary + Full Width </RaisedButton>


            <article>
                <h4>FloatingActionButton</h4>
                <pre>
                    &lt;FloatingActionButton&gt; Default &lt;/FloatingActionButton&gt;<br/>
                    &lt;FloatingActionButton primary="true"&gt; Primary &lt;/FloatingActionButton&gt;<br/>
                    &lt;FloatingActionButton secondary="true"&gt; Secondary &lt;/FloatingActionButton&gt;<br/>
                    &lt;FloatingActionButton disabled="true"&gt; Disabled &lt;/FloatingActionButton&gt;<br/>
                </pre>
                <h4>Result: </h4>
            </article>

            <FloatingActionButton> + </FloatingActionButton>
            <FloatingActionButton primary="true"> + </FloatingActionButton>
            <FloatingActionButton secondary="true">+</FloatingActionButton>
            <FloatingActionButton disabled="true">+</FloatingActionButton>


            <article>
                <h4>CircularProgress (Not ready yet)</h4>
                <pre>
                    &lt;CircularProgress /&gt;
                </pre>
                <h4>Result: </h4>
            </article>

            <CircularProgress />


            <article>
                <h4>Table</h4>
                <pre>
                    &lt;Table datasets={'{AllDatasets}'} /&gt;
                </pre>
                <h4>Result: </h4>
            </article>

            <Table datasets={AllDatasets} />
        </div>
    );
  }
}

body.propTypes = {
};
