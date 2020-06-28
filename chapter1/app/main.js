
const submissionComponent = 
{
    template : 
    ` <div style="display: flex; width: 100%">

        <figure class="media-left">
            <img class="image is-64x64" :src="s.submissionImage">
        </figure>

        <div class="media-content">
            <div class="content">
            <p>
                <strong>
                <a href="#" class="has-text-info">{{s.title}}</a>
                <span class="tag is-small">#{{s.id}}</span>
                </strong>
                <br>
                {{s.description}}
                <br>
                <small class="is-size-7">
                Submitted by:
                <img class="image is-24x24" :src="s.avatar">
                </small>
            </p>
            </div>
        </div>

        <div class="media-right">
            <span class="icon is-small" @click="upvote(s.id)">
            <i class="fa fa-chevron-up"></i>
            <strong class="has-text-info">{{ s.votes }}</strong>
            </span>
        </div>
        
      </div>
    `,
    props : ['s','submissions'],
    methods : 
    {
        upvote(id)
        {
            const submission = this.submissions.find(x => x.id === id);
            submission.votes++;
        }
    }
};

new Vue(
    {
        el : '#app',
        data : 
        {
            submissions : Seed.submissions
        },
        computed : 
        {
            sortedSubmissions()
            {
                return this.submissions.sort((a,b) => 
                {
                    return b.votes - a.votes
                });
            }
        },
        components : 
        {
            'submission-component' : submissionComponent
        }
    });