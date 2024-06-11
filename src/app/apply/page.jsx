
    "use client"
    import React from 'react';;
    import './styles.css'; // Import your stylesheet
    import { useState, useEffect } from 'react';

    const apply = () => {
    
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
      <div id="id_d_287_25">
        <div id="id_d_287_26">
          <p id="id_d_I287_26_124_436">VenturePark</p>
          <div id="id_d_I287_26_124_437">
            <p id="id_d_I287_26_124_438">About</p>
            <p id="id_d_I287_26_124_439">About</p>
            <button id="id_d_I287_26_124_440">
              <p id="id_d_I287_26_124_441">Contact</p>
            </button>
          </div>
        </div>
        <div id="id_d_287_27">
          <div id="id_d_287_28">
            <p id="id_d_287_29">Be Part of the Innovators: Apply as a Founder</p>
            <p id="id_d_287_30">Join Our Exclusive Community of Entrepreneurs</p>
          </div>
        </div>
        <div id="id_d_287_31">
          <div id="id_d_287_32">
            <div id="id_d_287_33">
              <p id="id_d_287_34">The Process You’ll Follow</p>
              <p id="id_d_287_35">Fill out the form We’ll reach out to you Pick a schedule to pitch your idea Get Selected!</p>
            </div>
            <div id="id_d_287_36">
              <div id="id_d_287_37">
                <p id="id_d_287_38">Still got some questions?</p>
                <p id="id_d_287_39">Feel free to react out to us to clear your doubts!</p>
              </div>
              <p id="id_d_287_40">info@venturepark.com</p>
              <div id="id_d_287_41">
                <div id="id_d_287_42">
                </div>
                <div id="id_d_287_43">
                </div>
              </div>
            </div>
          </div>
          <div id="id_d_287_44">
            <div id="id_d_287_45">
              <p id="id_d_287_46">Contact Information</p>
              <div id="id_d_287_47">
                <div id="id_d_287_48">
                  <p id="id_d_287_49">Name</p>
                  <input type='text' id='id_d_287_50' value={inputValues['id_d_287_50']} onChange={(e) => handleChange(e, 'id_d_287_50')} />
                    <p id="id_d_287_51">Enter your name</p>
                </div>
                <div id="id_d_287_52">
                  <p id="id_d_287_53">Email</p>
                  <input type='text' id='id_d_287_54' value={inputValues['id_d_287_54']} onChange={(e) => handleChange(e, 'id_d_287_54')} />
                    <p id="id_d_287_55">Enter your email</p>
                </div>
              </div>
            </div>
            <div id="id_d_287_56">
              <p id="id_d_287_57">Your Startup/Idea</p>
              <div id="id_d_287_58">
                <div id="id_d_287_59">
                  <div id="id_d_287_60">
                    <p id="id_d_287_61">Stage of Development</p>
                    <div id="id_d_287_62">
                      <p id="id_d_287_63">Select an option</p>
                    </div>
                  </div>
                  <div id="id_d_287_66">
                    <p id="id_d_287_67">Industry</p>
                    <div id="id_d_287_68">
                      <p id="id_d_287_69">Select an industry</p>
                      <div id="id_d_287_70">
                      </div>
                    </div>
                  </div>
                </div>
                <div id="id_d_287_71">
                  <p id="id_d_287_72">Brief summary of your startup idea</p>
                  <input type='text' id='id_d_287_73' value={inputValues['id_d_287_73']} onChange={(e) => handleChange(e, 'id_d_287_73')} />
                    <p id="id_d_287_74">Type here</p>
                </div>
                <div id="id_d_287_75">
                  <p id="id_d_287_76">Startup Website (optional)</p>
                  <input type='text' id='id_d_287_77' value={inputValues['id_d_287_77']} onChange={(e) => handleChange(e, 'id_d_287_77')} />
                    <p id="id_d_287_78">Paste your website link</p>
                </div>
              </div>
            </div>
            <div id="id_d_287_79">
              <p id="id_d_287_80">Your Requirements</p>
              <div id="id_d_287_81">
                <p id="id_d_287_82">Tell us about what you’re expecting you get from VenturePark</p>
                <input type='text' id='id_d_287_83' value={inputValues['id_d_287_83']} onChange={(e) => handleChange(e, 'id_d_287_83')} />
                  <p id="id_d_287_84">Type here</p>
              </div>
            </div>
            <button id="id_d_287_85">
              <p id="id_d_287_86">Get started for free</p>
            </button>
          </div>
        </div>
        <div id="id_d_287_87">
          <p id="id_d_I287_87_124_626">VenturePark</p>
          <div id="id_d_I287_87_124_627">
            <p id="id_d_I287_87_124_628">Home</p>
            <p id="id_d_I287_87_124_629">Home</p>
            <p id="id_d_I287_87_124_630">Home</p>
          </div>
          <p id="id_d_I287_87_124_631">Home</p>
        </div>
      </div>
</div>
<div class="tablet-screen">
      <div id="id_t_287_25">
        <div id="id_t_287_26">
          <p id="id_t_I287_26_124_436">VenturePark</p>
          <div id="id_t_I287_26_124_437">
            <p id="id_t_I287_26_124_438">About</p>
            <p id="id_t_I287_26_124_439">About</p>
            <button id="id_t_I287_26_124_440">
              <p id="id_t_I287_26_124_441">Contact</p>
            </button>
          </div>
        </div>
        <div id="id_t_287_27">
          <div id="id_t_287_28">
            <p id="id_t_287_29">Be Part of the Innovators: Apply as a Founder</p>
            <p id="id_t_287_30">Join Our Exclusive Community of Entrepreneurs</p>
          </div>
        </div>
        <div id="id_t_287_31">
          <div id="id_t_287_32">
            <div id="id_t_287_33">
              <p id="id_t_287_34">The Process You’ll Follow</p>
              <p id="id_t_287_35">Fill out the form We’ll reach out to you Pick a schedule to pitch your idea Get Selected!</p>
            </div>
            <div id="id_t_287_36">
              <div id="id_t_287_37">
                <p id="id_t_287_38">Still got some questions?</p>
                <p id="id_t_287_39">Feel free to react out to us to clear your doubts!</p>
              </div>
              <p id="id_t_287_40">info@venturepark.com</p>
              <div id="id_t_287_41">
                <div id="id_t_287_42">
                </div>
                <div id="id_t_287_43">
                </div>
              </div>
            </div>
          </div>
          <div id="id_t_287_44">
            <div id="id_t_287_45">
              <p id="id_t_287_46">Contact Information</p>
              <div id="id_t_287_47">
                <div id="id_t_287_48">
                  <p id="id_t_287_49">Name</p>
                  <input type='text' id='id_t_287_50' value={inputValues['id_t_287_50']} onChange={(e) => handleChange(e, 'id_t_287_50')} />
                    <p id="id_t_287_51">Enter your name</p>
                </div>
                <div id="id_t_287_52">
                  <p id="id_t_287_53">Email</p>
                  <input type='text' id='id_t_287_54' value={inputValues['id_t_287_54']} onChange={(e) => handleChange(e, 'id_t_287_54')} />
                    <p id="id_t_287_55">Enter your email</p>
                </div>
              </div>
            </div>
            <div id="id_t_287_56">
              <p id="id_t_287_57">Your Startup/Idea</p>
              <div id="id_t_287_58">
                <div id="id_t_287_59">
                  <div id="id_t_287_60">
                    <p id="id_t_287_61">Stage of Development</p>
                    <div id="id_t_287_62">
                      <p id="id_t_287_63">Select an option</p>
                    </div>
                  </div>
                  <div id="id_t_287_66">
                    <p id="id_t_287_67">Industry</p>
                    <div id="id_t_287_68">
                      <p id="id_t_287_69">Select an industry</p>
                      <div id="id_t_287_70">
                      </div>
                    </div>
                  </div>
                </div>
                <div id="id_t_287_71">
                  <p id="id_t_287_72">Brief summary of your startup idea</p>
                  <input type='text' id='id_t_287_73' value={inputValues['id_t_287_73']} onChange={(e) => handleChange(e, 'id_t_287_73')} />
                    <p id="id_t_287_74">Type here</p>
                </div>
                <div id="id_t_287_75">
                  <p id="id_t_287_76">Startup Website (optional)</p>
                  <input type='text' id='id_t_287_77' value={inputValues['id_t_287_77']} onChange={(e) => handleChange(e, 'id_t_287_77')} />
                    <p id="id_t_287_78">Paste your website link</p>
                </div>
              </div>
            </div>
            <div id="id_t_287_79">
              <p id="id_t_287_80">Your Requirements</p>
              <div id="id_t_287_81">
                <p id="id_t_287_82">Tell us about what you’re expecting you get from VenturePark</p>
                <input type='text' id='id_t_287_83' value={inputValues['id_t_287_83']} onChange={(e) => handleChange(e, 'id_t_287_83')} />
                  <p id="id_t_287_84">Type here</p>
              </div>
            </div>
            <button id="id_t_287_85">
              <p id="id_t_287_86">Get started for free</p>
            </button>
          </div>
        </div>
        <div id="id_t_287_87">
          <p id="id_t_I287_87_124_626">VenturePark</p>
          <div id="id_t_I287_87_124_627">
            <p id="id_t_I287_87_124_628">Home</p>
            <p id="id_t_I287_87_124_629">Home</p>
            <p id="id_t_I287_87_124_630">Home</p>
          </div>
          <p id="id_t_I287_87_124_631">Home</p>
        </div>
      </div>
</div>
<div class="mobile-screen">
      <div id="id_m_287_103">
        <div id="id_m_287_353">
          <p id="id_m_287_354">VenturePark</p>
          <button id="id_m_287_355">
            <p id="id_m_287_356">Join Now</p>
          </button>
        </div>
        <div id="id_m_287_357">
          <div id="id_m_287_358">
            <p id="id_m_287_359">Be Part of the Innovators: Apply as a Founder</p>
            <p id="id_m_287_360">Join Our Exclusive Community of Entrepreneurs</p>
          </div>
        </div>
        <div id="id_m_287_294">
          <div id="id_m_287_295">
            <div id="id_m_287_296">
              <p id="id_m_287_297">The Process You’ll Follow</p>
              <p id="id_m_287_298">Fill out the form We’ll reach out to you Pick a schedule to pitch your idea Get Selected!</p>
            </div>
            <div id="id_m_287_299">
              <div id="id_m_287_300">
                <p id="id_m_287_301">Still got some questions?</p>
                <p id="id_m_287_302">Feel free to react out to us to clear your doubts!</p>
              </div>
              <p id="id_m_287_303">info@venturepark.com</p>
              <div id="id_m_287_304">
                <div id="id_m_287_305">
                </div>
                <div id="id_m_287_306">
                </div>
              </div>
            </div>
          </div>
          <div id="id_m_287_307">
            <div id="id_m_287_308">
              <p id="id_m_287_309">Contact Information</p>
              <div id="id_m_287_310">
                <div id="id_m_287_311">
                  <p id="id_m_287_312">Name</p>
                  <input type='text' id='id_m_287_313' value={inputValues['id_m_287_313']} onChange={(e) => handleChange(e, 'id_m_287_313')} />
                    <p id="id_m_287_314">Enter your name</p>
                </div>
                <div id="id_m_287_315">
                  <p id="id_m_287_316">Email</p>
                  <input type='text' id='id_m_287_317' value={inputValues['id_m_287_317']} onChange={(e) => handleChange(e, 'id_m_287_317')} />
                    <p id="id_m_287_318">Enter your email</p>
                </div>
              </div>
            </div>
            <div id="id_m_287_319">
              <p id="id_m_287_320">Your Startup/Idea</p>
              <div id="id_m_287_321">
                <div id="id_m_287_322">
                  <div id="id_m_287_323">
                    <p id="id_m_287_324">Stage of Development</p>
                    <div id="id_m_287_325">
                      <p id="id_m_287_326">Select an option</p>
                      <div id="id_m_287_327">
                      </div>
                    </div>
                  </div>
                  <div id="id_m_287_328">
                    <p id="id_m_287_329">Industry</p>
                    <div id="id_m_287_330">
                      <p id="id_m_287_331">Select an industry</p>
                      <div id="id_m_287_332">
                      </div>
                    </div>
                  </div>
                </div>
                <div id="id_m_287_333">
                  <p id="id_m_287_334">Brief summary of your startup idea</p>
                  <input type='text' id='id_m_287_335' value={inputValues['id_m_287_335']} onChange={(e) => handleChange(e, 'id_m_287_335')} />
                    <p id="id_m_287_336">Type here</p>
                </div>
                <div id="id_m_287_337">
                  <p id="id_m_287_338">Startup Website (optional)</p>
                  <input type='text' id='id_m_287_339' value={inputValues['id_m_287_339']} onChange={(e) => handleChange(e, 'id_m_287_339')} />
                    <p id="id_m_287_340">Paste your website link</p>
                </div>
              </div>
            </div>
            <div id="id_m_287_341">
              <p id="id_m_287_342">Your Requirements</p>
              <div id="id_m_287_343">
                <p id="id_m_287_344">Tell us about what you’re expecting you get from VenturePark</p>
                <input type='text' id='id_m_287_345' value={inputValues['id_m_287_345']} onChange={(e) => handleChange(e, 'id_m_287_345')} />
                  <p id="id_m_287_346">Type here</p>
              </div>
            </div>
            <button id="id_m_287_347">
              <p id="id_m_287_348">Get started for free</p>
            </button>
          </div>
        </div>
        <div id="id_m_287_230">
          <p id="id_m_287_231">VenturePark</p>
          <p id="id_m_287_232">Home</p>
        </div>
      </div>
</div>
</body>

    );
    };
    export default apply;
    