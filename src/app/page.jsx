
    "use client"
    import React from 'react';;
    import './styles.css'; // Import your stylesheet
    import { useState, useEffect } from 'react';

    const home = () => {
    
    const [inputValues, setInputValues] = useState({
    });


    const handleChange = (e, inputId) => {
        const { value } = e.target;
        setInputValues(prevState => ({
            ...prevState,
            [inputId]: value
        }));
    };

    useEffect(() => {
        console.log('Input values changed:', inputValues);
    }, [inputValues]);


    return (
        <body><div class="desktop-screen">
      <div id="id_d_137_677">
          <div id="id_d_137_679">
            <div id="id_d_137_680">
              <div id="id_d_137_681">
                <p id="id_d_137_682">Your Partner in Entrepreneurial Success</p>
                <p id="id_d_137_683">Building Teams, Creating MVPs, and Launching Startups with Our Incubation Services and Community Support</p>
              </div>
              <div id="id_d_137_684">
                <button id="id_d_137_685">
                  <p id="id_d_137_686">Get started for free</p>
                </button>
                <button id="id_d_137_687">
                  <p id="id_d_137_688">View Pricing</p>
                </button>
              </div>
            </div>
          </div>
          <div id="id_d_137_689">
            <p id="id_d_137_690">VenturePark</p>
            <button id="id_d_137_691">
              <p id="id_d_137_692">Home</p>
              <p id="id_d_137_693">About</p>
              <p id="id_d_137_694">Contact</p>
              <div id="id_d_137_695">
                <p id="id_d_137_696">Contact</p>
              </div>
            </button>
          </div>
        <div id="id_d_137_697">
          <p id="id_d_137_698">Transform your ideas into reality, let's make it happen!</p>
          <p id="id_d_137_699">Bring your ideas to life with us. Idea generation to MVP development, resources, mentorship and connections provided. Join our community and make it happen</p>
        </div>
        <div id="id_d_137_700">
          <div id="id_d_137_701">
            <p id="id_d_137_702">12+</p>
            <p id="id_d_137_703">Community size</p>
          </div>
          <div id="id_d_137_704">
            <p id="id_d_137_705">4</p>
            <p id="id_d_137_706">incubated Startups</p>
          </div>
          <div id="id_d_137_707">
            <p id="id_d_137_708">2</p>
            <p id="id_d_137_709">Number of Partners</p>
          </div>
          <div id="id_d_137_710">
            <p id="id_d_137_711">6</p>
            <p id="id_d_137_712">Number of mentors</p>
          </div>
          <div id="id_d_137_713">
            <p id="id_d_137_714">1</p>
            <p id="id_d_137_715">female founders</p>
          </div>
        </div>
        <div id="id_d_137_716">
          <p id="id_d_137_717">We will Help You With</p>
          <div id="id_d_137_718">
            <div id="id_d_137_719">
              <div id="id_d_137_720">
                <div id="id_d_137_721">
                  <div id="id_d_137_722">
                    <div id="id_d_137_723">
                    </div>
                  </div>
                </div>
                <p id="id_d_137_725">Generating & Validating Ideas</p>
                <p id="id_d_137_726">Generate and validate your ideas through market research, customer validation, and brainstorming sessions</p>
              </div>
              <div id="id_d_137_727">
                <div id="id_d_137_728">
                  <div id="id_d_137_729">
                  </div>
                </div>
                <p id="id_d_137_731">MVP Development</p>
                <p id="id_d_137_732">Help you in building and testing your MVP through product development, design, and user testing</p>
              </div>
              <div id="id_d_137_733">
                <div id="id_d_137_734">
                  <div id="id_d_137_735">
                  </div>
                </div>
                <p id="id_d_137_737">Marketing & Fundraising</p>
                <p id="id_d_137_738">Get support in creating a marketing strategy and raising funds through branding, pitch deck creation, and networking opportunities</p>
              </div>
            </div>
            <div id="id_d_137_739">
              <div id="id_d_137_740">
                <div id="id_d_137_741">
                  <div id="id_d_137_742">
                  </div>
                </div>
                <p id="id_d_137_744">Mentorship & Coaching</p>
                <p id="id_d_137_745">Providing you with access to experienced mentors and coaches who can provide guidance and advice on various aspects of entrepreneurship</p>
              </div>
              <div id="id_d_137_746">
                <div id="id_d_137_747">
                  <div id="id_d_137_748">
                  </div>
                </div>
                <p id="id_d_137_750">Community & Networking</p>
                <p id="id_d_137_751">A supportive community of entrepreneurs and provide networking opportunities for you to connect with other entrepreneurs, investors, and industry experts.</p>
              </div>
              <div id="id_d_137_752">
                <div id="id_d_137_753">
                  <div id="id_d_137_754">
                  </div>
                </div>
                <p id="id_d_137_757">Workshops & Events</p>
                <p id="id_d_137_758">Organizing workshops and events that provide you the opportunity to learn new skills, network with other entrepreneurs, and stay updated on industry trends</p>
              </div>
            </div>
          </div>
        </div>
        <div id="id_d_137_759">
          <p id="id_d_137_760">Frequently Asked Questions</p>
          <div id="id_d_137_761">
            <div id="id_d_137_762">
              <div id="id_d_137_763">
                <p id="id_d_137_764">What is Venture Park?</p>
                <p id="id_d_137_765">Venture Park is an incubation center that helps entrepreneurs bring their ideas to life by providing resources, support, and connections. We offer a range of services, including idea generation, MVP development, and fundraising, to help entrepreneurs navigate the journey of entrepreneurship.</p>
              </div>
              <div id="id_d_137_766">
                <p id="id_d_137_767">What services does Venture Park provide?</p>
                <p id="id_d_137_768">We provide a range of services to entrepreneurs, including idea generation and validation, MVP development, marketing and fundraising, mentorship and coaching, networking and community building, customized incubation programs, workshops and events, legal and financial support, access to funding, and post-incubation support.</p>
              </div>
            </div>
            <div id="id_d_137_769">
              <div id="id_d_137_770">
                <p id="id_d_137_771">Who is the target market for Venture Park?</p>
                <p id="id_d_137_772">We target entrepreneurs who are looking to turn their ideas into reality, regardless of their stage, whether they are just in the idea generation stage, working on their MVP, or seeking funding.</p>
              </div>
              <div id="id_d_137_773">
                <p id="id_d_137_774">How does Venture Park help entrepreneurs?</p>
                <p id="id_d_137_775">We provide entrepreneurs with the resources, support, and connections they need to bring their ideas to life. This includes mentorship, networking opportunities, and access to funding. We also provide services such as idea generation and validation, MVP development, marketing and fundraising, and more.</p>
              </div>
            </div>
            <div id="id_d_137_776">
              <div id="id_d_137_777">
                <p id="id_d_137_778">What is the selection process for entrepreneurs?</p>
                <p id="id_d_137_779">The selection process for entrepreneurs varies depending on the specific program or service. However, it generally includes an application, a review of the entrepreneur's idea or MVP, and an interview with the entrepreneur to assess their readiness and fit for the program.</p>
              </div>
              <div id="id_d_137_780">
                <p id="id_d_137_781">How long is the incubation process?</p>
                <p id="id_d_137_782">The incubation process varies depending on the specific needs of the entrepreneur and the stage of their startup. Some entrepreneurs may only need a few months of support to launch their MVP, while others may need several months to a year to raise funding and fully launch their startup. Our incubation program is tailored to the specific needs of each entrepreneur and their startup, so the duration of the program will vary.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="id_d_137_783">
          <div id="id_d_137_784">
            <p id="id_d_137_785">Join Our Community</p>
            <p id="id_d_137_786">Join our community and make a difference - collaborate on projects, share skills, and help startups succeed.</p>
          </div>
          <button id="id_d_137_787">
            <p id="id_d_137_788">Get started for free</p>
          </button>
        </div>
        <div id="id_d_137_789">
          <div id="id_d_137_790">
            <div id="id_d_137_791">
              <p id="id_d_137_792">Reach Out to Us</p>
              <p id="id_d_137_793">We’re always open to any suggestions or ideas that you may have. Feel free to send us a message or check out our socials!</p>
            </div>
            <div id="id_d_186_7">
            </div>
            <div id="id_d_137_794">
              <div id="id_d_137_795">
              </div>
              <div id="id_d_137_796">
              </div>
            </div>
          </div>
          <div id="id_d_137_797">
            <p id="id_d_137_798">Send us a Message</p>
            <div id="id_d_137_799">
              <input type='text' id='id_d_137_800' value={inputValues['id_d_137_800']} onChange={(e) => handleChange(e, 'id_d_137_800')} />
                <p id="id_d_137_801">Enter your name</p>
              <input type='text' id='id_d_137_802' value={inputValues['id_d_137_802']} onChange={(e) => handleChange(e, 'id_d_137_802')} />
                <p id="id_d_137_803">Enter your email</p>
              <input type='text' id='id_d_137_804' value={inputValues['id_d_137_804']} onChange={(e) => handleChange(e, 'id_d_137_804')} />
                <p id="id_d_137_805">Your Message</p>
              <button id="id_d_137_806">
                <p id="id_d_137_807">Get started for free</p>
              </button>
            </div>
          </div>
        </div>
        <div id="id_d_137_808">
          <p id="id_d_137_809">VenturePark</p>
          <p id="id_d_137_810">Home</p>
        </div>
      </div>
</div>
<div class="tablet-screen">
      <div id="id_t_137_677">
          <div id="id_t_137_679">
            <div id="id_t_137_680">
              <div id="id_t_137_681">
                <p id="id_t_137_682">Your Partner in Entrepreneurial Success</p>
                <p id="id_t_137_683">Building Teams, Creating MVPs, and Launching Startups with Our Incubation Services and Community Support</p>
              </div>
              <div id="id_t_137_684">
                <button id="id_t_137_685">
                  <p id="id_t_137_686">Get started for free</p>
                </button>
                <button id="id_t_137_687">
                  <p id="id_t_137_688">View Pricing</p>
                </button>
              </div>
            </div>
          </div>
          <div id="id_t_137_689">
            <p id="id_t_137_690">VenturePark</p>
            <button id="id_t_137_691">
              <p id="id_t_137_692">Home</p>
              <p id="id_t_137_693">About</p>
              <p id="id_t_137_694">Contact</p>
              <div id="id_t_137_695">
                <p id="id_t_137_696">Contact</p>
              </div>
            </button>
          </div>
        <div id="id_t_137_697">
          <p id="id_t_137_698">Transform your ideas into reality, let's make it happen!</p>
          <p id="id_t_137_699">Bring your ideas to life with us. Idea generation to MVP development, resources, mentorship and connections provided. Join our community and make it happen</p>
        </div>
        <div id="id_t_137_700">
          <div id="id_t_137_701">
            <p id="id_t_137_702">12+</p>
            <p id="id_t_137_703">Community size</p>
          </div>
          <div id="id_t_137_704">
            <p id="id_t_137_705">4</p>
            <p id="id_t_137_706">incubated Startups</p>
          </div>
          <div id="id_t_137_707">
            <p id="id_t_137_708">2</p>
            <p id="id_t_137_709">Number of Partners</p>
          </div>
          <div id="id_t_137_710">
            <p id="id_t_137_711">6</p>
            <p id="id_t_137_712">Number of mentors</p>
          </div>
          <div id="id_t_137_713">
            <p id="id_t_137_714">1</p>
            <p id="id_t_137_715">female founders</p>
          </div>
        </div>
        <div id="id_t_137_716">
          <p id="id_t_137_717">We will Help You With</p>
          <div id="id_t_137_718">
            <div id="id_t_137_719">
              <div id="id_t_137_720">
                <div id="id_t_137_721">
                  <div id="id_t_137_722">
                    <div id="id_t_137_723">
                    </div>
                  </div>
                </div>
                <p id="id_t_137_725">Generating & Validating Ideas</p>
                <p id="id_t_137_726">Generate and validate your ideas through market research, customer validation, and brainstorming sessions</p>
              </div>
              <div id="id_t_137_727">
                <div id="id_t_137_728">
                  <div id="id_t_137_729">
                  </div>
                </div>
                <p id="id_t_137_731">MVP Development</p>
                <p id="id_t_137_732">Help you in building and testing your MVP through product development, design, and user testing</p>
              </div>
              <div id="id_t_137_733">
                <div id="id_t_137_734">
                  <div id="id_t_137_735">
                  </div>
                </div>
                <p id="id_t_137_737">Marketing & Fundraising</p>
                <p id="id_t_137_738">Get support in creating a marketing strategy and raising funds through branding, pitch deck creation, and networking opportunities</p>
              </div>
            </div>
            <div id="id_t_137_739">
              <div id="id_t_137_740">
                <div id="id_t_137_741">
                  <div id="id_t_137_742">
                  </div>
                </div>
                <p id="id_t_137_744">Mentorship & Coaching</p>
                <p id="id_t_137_745">Providing you with access to experienced mentors and coaches who can provide guidance and advice on various aspects of entrepreneurship</p>
              </div>
              <div id="id_t_137_746">
                <div id="id_t_137_747">
                  <div id="id_t_137_748">
                  </div>
                </div>
                <p id="id_t_137_750">Community & Networking</p>
                <p id="id_t_137_751">A supportive community of entrepreneurs and provide networking opportunities for you to connect with other entrepreneurs, investors, and industry experts.</p>
              </div>
              <div id="id_t_137_752">
                <div id="id_t_137_753">
                  <div id="id_t_137_754">
                  </div>
                </div>
                <p id="id_t_137_757">Workshops & Events</p>
                <p id="id_t_137_758">Organizing workshops and events that provide you the opportunity to learn new skills, network with other entrepreneurs, and stay updated on industry trends</p>
              </div>
            </div>
          </div>
        </div>
        <div id="id_t_137_759">
          <p id="id_t_137_760">Frequently Asked Questions</p>
          <div id="id_t_137_761">
            <div id="id_t_137_762">
              <div id="id_t_137_763">
                <p id="id_t_137_764">What is Venture Park?</p>
                <p id="id_t_137_765">Venture Park is an incubation center that helps entrepreneurs bring their ideas to life by providing resources, support, and connections. We offer a range of services, including idea generation, MVP development, and fundraising, to help entrepreneurs navigate the journey of entrepreneurship.</p>
              </div>
              <div id="id_t_137_766">
                <p id="id_t_137_767">What services does Venture Park provide?</p>
                <p id="id_t_137_768">We provide a range of services to entrepreneurs, including idea generation and validation, MVP development, marketing and fundraising, mentorship and coaching, networking and community building, customized incubation programs, workshops and events, legal and financial support, access to funding, and post-incubation support.</p>
              </div>
            </div>
            <div id="id_t_137_769">
              <div id="id_t_137_770">
                <p id="id_t_137_771">Who is the target market for Venture Park?</p>
                <p id="id_t_137_772">We target entrepreneurs who are looking to turn their ideas into reality, regardless of their stage, whether they are just in the idea generation stage, working on their MVP, or seeking funding.</p>
              </div>
              <div id="id_t_137_773">
                <p id="id_t_137_774">How does Venture Park help entrepreneurs?</p>
                <p id="id_t_137_775">We provide entrepreneurs with the resources, support, and connections they need to bring their ideas to life. This includes mentorship, networking opportunities, and access to funding. We also provide services such as idea generation and validation, MVP development, marketing and fundraising, and more.</p>
              </div>
            </div>
            <div id="id_t_137_776">
              <div id="id_t_137_777">
                <p id="id_t_137_778">What is the selection process for entrepreneurs?</p>
                <p id="id_t_137_779">The selection process for entrepreneurs varies depending on the specific program or service. However, it generally includes an application, a review of the entrepreneur's idea or MVP, and an interview with the entrepreneur to assess their readiness and fit for the program.</p>
              </div>
              <div id="id_t_137_780">
                <p id="id_t_137_781">How long is the incubation process?</p>
                <p id="id_t_137_782">The incubation process varies depending on the specific needs of the entrepreneur and the stage of their startup. Some entrepreneurs may only need a few months of support to launch their MVP, while others may need several months to a year to raise funding and fully launch their startup. Our incubation program is tailored to the specific needs of each entrepreneur and their startup, so the duration of the program will vary.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="id_t_137_783">
          <div id="id_t_137_784">
            <p id="id_t_137_785">Join Our Community</p>
            <p id="id_t_137_786">Join our community and make a difference - collaborate on projects, share skills, and help startups succeed.</p>
          </div>
          <button id="id_t_137_787">
            <p id="id_t_137_788">Get started for free</p>
          </button>
        </div>
        <div id="id_t_137_789">
          <div id="id_t_137_790">
            <div id="id_t_137_791">
              <p id="id_t_137_792">Reach Out to Us</p>
              <p id="id_t_137_793">We’re always open to any suggestions or ideas that you may have. Feel free to send us a message or check out our socials!</p>
            </div>
            <div id="id_t_186_7">
            </div>
            <div id="id_t_137_794">
              <div id="id_t_137_795">
              </div>
              <div id="id_t_137_796">
              </div>
            </div>
          </div>
          <div id="id_t_137_797">
            <p id="id_t_137_798">Send us a Message</p>
            <div id="id_t_137_799">
              <input type='text' id='id_t_137_800' value={inputValues['id_t_137_800']} onChange={(e) => handleChange(e, 'id_t_137_800')} />
                <p id="id_t_137_801">Enter your name</p>
              <input type='text' id='id_t_137_802' value={inputValues['id_t_137_802']} onChange={(e) => handleChange(e, 'id_t_137_802')} />
                <p id="id_t_137_803">Enter your email</p>
              <input type='text' id='id_t_137_804' value={inputValues['id_t_137_804']} onChange={(e) => handleChange(e, 'id_t_137_804')} />
                <p id="id_t_137_805">Your Message</p>
              <button id="id_t_137_806">
                <p id="id_t_137_807">Get started for free</p>
              </button>
            </div>
          </div>
        </div>
        <div id="id_t_137_808">
          <p id="id_t_137_809">VenturePark</p>
          <p id="id_t_137_810">Home</p>
        </div>
      </div>
</div>
<div class="mobile-screen">
      <div id="id_m_137_811">
        <div id="id_m_137_812">
          <div id="id_m_137_813">
            <div id="id_m_137_814">
              <div id="id_m_137_815">
                <p id="id_m_137_816">Your Partner in Entrepreneurial Success</p>
                <p id="id_m_137_817">Building Teams, Creating MVPs, and Launching Startups with Our Incubation Services and Community Support</p>
              </div>
              <button id="id_m_137_818">
                <button id="id_m_137_819">
                  <p id="id_m_137_820">Get started for free</p>
                </button>
                <button id="id_m_137_821">
                  <p id="id_m_137_822">View Pricing</p>
                </button>
              </button>
            </div>
          </div>
          <div id="id_m_137_823">
            <p id="id_m_137_824">VenturePark</p>
            <button id="id_m_137_829">
              <p id="id_m_137_830">Join Now</p>
            </button>
          </div>
        </div>
        <div id="id_m_137_831">
          <p id="id_m_137_832">Transform your ideas into reality, let's make it happen!</p>
          <p id="id_m_137_833">Bring your ideas to life with us. Idea generation to MVP development, resources, mentorship and connections provided. Join our community and make it happen</p>
        </div>
        <div id="id_m_137_834">
          <div id="id_m_137_835">
            <p id="id_m_137_836">12+</p>
            <p id="id_m_137_837">Community size</p>
          </div>
          <div id="id_m_137_838">
            <p id="id_m_137_839">4</p>
            <p id="id_m_137_840">incubated Startups</p>
          </div>
          <div id="id_m_137_841">
            <p id="id_m_137_842">2</p>
            <p id="id_m_137_843">Number of Partners</p>
          </div>
          <div id="id_m_137_844">
            <p id="id_m_137_845">6</p>
            <p id="id_m_137_846">Number of mentors</p>
          </div>
          <div id="id_m_137_847">
            <p id="id_m_137_848">1</p>
            <p id="id_m_137_849">female founders</p>
          </div>
        </div>
        <div id="id_m_137_850">
          <p id="id_m_137_851">We will Help You With</p>
          <div id="id_m_137_852">
            <div id="id_m_137_853">
              <div id="id_m_137_854">
                <div id="id_m_137_855">
                  <div id="id_m_137_856">
                    <div id="id_m_137_857">
                    </div>
                  </div>
                </div>
                <p id="id_m_137_859">Generating & Validating Ideas</p>
                <p id="id_m_137_860">Generate and validate your ideas through market research, customer validation, and brainstorming sessions</p>
              </div>
              <div id="id_m_137_861">
                <div id="id_m_137_862">
                  <div id="id_m_137_863">
                  </div>
                </div>
                <p id="id_m_137_865">MVP Development</p>
                <p id="id_m_137_866">Help you in building and testing your MVP through product development, design, and user testing</p>
              </div>
              <div id="id_m_137_867">
                <div id="id_m_137_868">
                  <div id="id_m_137_869">
                  </div>
                </div>
                <p id="id_m_137_871">Marketing & Fundraising</p>
                <p id="id_m_137_872">Get support in creating a marketing strategy and raising funds through branding, pitch deck creation, and networking opportunities</p>
              </div>
            </div>
            <div id="id_m_137_873">
              <div id="id_m_137_874">
                <div id="id_m_137_875">
                  <div id="id_m_137_876">
                  </div>
                </div>
                <p id="id_m_137_878">Mentorship & Coaching</p>
                <p id="id_m_137_879">Providing you with access to experienced mentors and coaches who can provide guidance and advice on various aspects of entrepreneurship</p>
              </div>
              <div id="id_m_137_880">
                <div id="id_m_137_881">
                  <div id="id_m_137_882">
                  </div>
                </div>
                <p id="id_m_137_884">Community & Networking</p>
                <p id="id_m_137_885">A supportive community of entrepreneurs and provide networking opportunities for you to connect with other entrepreneurs, investors, and industry experts.</p>
              </div>
              <div id="id_m_137_886">
                <div id="id_m_137_887">
                  <div id="id_m_137_888">
                  </div>
                </div>
                <p id="id_m_137_891">Workshops & Events</p>
                <p id="id_m_137_892">Organizing workshops and events that provide you the opportunity to learn new skills, network with other entrepreneurs, and stay updated on industry trends</p>
              </div>
            </div>
          </div>
        </div>
        <div id="id_m_137_893">
          <p id="id_m_137_894">Frequently Asked Questions</p>
          <div id="id_m_137_895">
            <div id="id_m_137_896">
              <div id="id_m_137_897">
                <p id="id_m_137_898">What is Venture Park?</p>
                <p id="id_m_137_899">Venture Park is an incubation center that helps entrepreneurs bring their ideas to life by providing resources, support, and connections. We offer a range of services, including idea generation, MVP development, and fundraising, to help entrepreneurs navigate the journey of entrepreneurship.</p>
              </div>
              <div id="id_m_137_900">
                <p id="id_m_137_901">What services does Venture Park provide?</p>
                <p id="id_m_137_902">We provide a range of services to entrepreneurs, including idea generation and validation, MVP development, marketing and fundraising, mentorship and coaching, networking and community building, customized incubation programs, workshops and events, legal and financial support, access to funding, and post-incubation support.</p>
              </div>
            </div>
            <div id="id_m_137_903">
              <div id="id_m_137_904">
                <p id="id_m_137_905">Who is the target market for Venture Park?</p>
                <p id="id_m_137_906">We target entrepreneurs who are looking to turn their ideas into reality, regardless of their stage, whether they are just in the idea generation stage, working on their MVP, or seeking funding.</p>
              </div>
              <div id="id_m_137_907">
                <p id="id_m_137_908">How does Venture Park help entrepreneurs?</p>
                <p id="id_m_137_909">We provide entrepreneurs with the resources, support, and connections they need to bring their ideas to life. This includes mentorship, networking opportunities, and access to funding. We also provide services such as idea generation and validation, MVP development, marketing and fundraising, and more.</p>
              </div>
            </div>
            <div id="id_m_137_910">
              <div id="id_m_137_911">
                <p id="id_m_137_912">What is the selection process for entrepreneurs?</p>
                <p id="id_m_137_913">The selection process for entrepreneurs varies depending on the specific program or service. However, it generally includes an application, a review of the entrepreneur's idea or MVP, and an interview with the entrepreneur to assess their readiness and fit for the program.</p>
              </div>
              <div id="id_m_137_914">
                <p id="id_m_137_915">How long is the incubation process?</p>
                <p id="id_m_137_916">The incubation process varies depending on the specific needs of the entrepreneur and the stage of their startup. Some entrepreneurs may only need a few months of support to launch their MVP, while others may need several months to a year to raise funding and fully launch their startup. Our incubation program is tailored to the specific needs of each entrepreneur and their startup, so the duration of the program will vary.</p>
              </div>
            </div>
          </div>
        </div>
        <div id="id_m_137_917">
          <div id="id_m_137_918">
            <p id="id_m_137_919">Join Our Community</p>
            <p id="id_m_137_920">Join our community and make a difference - collaborate on projects, share skills, and help startups succeed.</p>
          </div>
          <div id="id_m_137_921">
            <p id="id_m_137_922">Get started for free</p>
          </div>
        </div>
        <div id="id_m_137_923">
          <div id="id_m_137_924">
            <div id="id_m_137_925">
              <p id="id_m_137_926">Reach Out to Us</p>
              <p id="id_m_137_927">We’re always open to any suggestions or ideas that you may have. Feel free to send us a message or check out our socials!</p>
            </div>
            <div id="id_m_137_928">
              <div id="id_m_137_929">
              </div>
              <div id="id_m_137_930">
              </div>
            </div>
          </div>
          <div id="id_m_137_931">
            <p id="id_m_137_932">Send us a Message</p>
            <div id="id_m_137_933">
              <input type='text' id='id_m_137_934' value={inputValues['id_m_137_934']} onChange={(e) => handleChange(e, 'id_m_137_934')} />
                <p id="id_m_137_935">Enter your name</p>
              <input type='text' id='id_m_137_936' value={inputValues['id_m_137_936']} onChange={(e) => handleChange(e, 'id_m_137_936')} />
                <p id="id_m_137_937">Enter your email</p>
              <input type='text' id='id_m_137_938' value={inputValues['id_m_137_938']} onChange={(e) => handleChange(e, 'id_m_137_938')} />
                <p id="id_m_137_939">Your Message</p>
              <button id="id_m_137_940">
                <p id="id_m_137_941">Get started for free</p>
              </button>
            </div>
          </div>
        </div>
        <div id="id_m_137_942">
          <p id="id_m_137_943">VenturePark</p>
          <p id="id_m_137_944">Home</p>
        </div>
      </div>
</div>
</body>

    );
    };
    export default home;
    