import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Test() {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    navigate('/Test2');
    
  };

  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non tempore dolorem nesciunt nulla aliquam quae eligendi officiis in minus architecto voluptatibus provident dolore quo, fuga, minima dicta similique. Obcaecati necessitatibus molestiae nihil qui accusantium in dicta, velit molestias nemo vel quae consequuntur labore atque amet harum vitae iure aut fuga. Nostrum, consequuntur. Perspiciatis maxime cumque ipsam deserunt excepturi. Neque, modi! Excepturi, sit non debitis facere vero ipsum architecto delectus ea ratione corporis ipsa minus harum distinctio dolores dolorem molestiae nostrum. Cum dignissimos exercitationem reprehenderit magnam consequatur non aspernatur quasi laborum veritatis, debitis ad quidem voluptatibus atque quo in fugit animi temporibus ratione voluptatem quia, enim, iste commodi dicta deserunt? Quas, asperiores reiciendis omnis nam fuga nobis qui assumenda dolorem beatae, eius velit nostrum doloremque sequi quos eos provident dicta debitis. Libero quo reprehenderit est modi quisquam repellendus in itaque ullam, explicabo facilis dolore dolores ad eius impedit voluptas ducimus dicta commodi. Optio dolor necessitatibus, omnis sequi iure saepe doloremque eaque harum corporis! Exercitationem dolorem reprehenderit porro totam nihil non accusamus delectus eaque quae cupiditate, cum nostrum natus accusantium ratione corrupti enim error in, nam hic? Quo, nihil quis tenetur dignissimos repellendus pariatur unde quos quam quibusdam modi sed aut, fuga excepturi magnam quod iusto itaque accusantium, quae dolore ipsum consequuntur suscipit? Soluta quos porro quibusdam fugit perspiciatis possimus veniam consectetur exercitationem. Alias qui ipsum ipsa earum quam voluptas minima fuga, expedita possimus libero excepturi omnis tempore. Maxime, alias fugit? Asperiores dolorem quibusdam libero atque aperiam laborum soluta aliquam, pariatur explicabo natus eligendi corrupti nemo et quia ipsam magnam consequatur, ratione perspiciatis dolorum vero quas nam hic totam velit! Distinctio dolore recusandae quasi eum tempora rerum maxime necessitatibus aliquid illum animi modi temporibus laudantium dolor odio corrupti, nam praesentium veritatis debitis pariatur saepe voluptas eaque! Sunt ad quisquam quo aut eaque expedita numquam explicabo culpa doloremque! Ea amet nesciunt, velit sequi asperiores voluptate similique totam porro, voluptatem aperiam laudantium dicta repellat magnam facere voluptatibus! Praesentium modi ipsum delectus. Tempore, rem. Dolore at adipisci architecto id deleniti. Modi quod nostrum, maiores et odit animi ut aliquid recusandae eaque quasi consequuntur voluptas laboriosam dignissimos commodi quidem, rem doloremque quibusdam nemo quam doloribus labore molestias quas eum. Minus nisi vitae id, vero cum iure laborum, quae sint reprehenderit itaque in ratione deleniti similique vel rem, inventore molestiae labore non corrupti aspernatur repellendus quisquam. Optio repellat omnis magni iusto, unde non quae minima, ullam dolorum vitae, expedita autem debitis culpa assumenda dolores deserunt? Ab impedit quasi id voluptate enim nulla quod esse quidem neque blanditiis. Exercitationem voluptas aperiam officiis esse ducimus et magnam blanditiis ipsa libero deserunt. Ipsam reiciendis omnis, corrupti recusandae laudantium distinctio nihil repellat. Facilis, doloremque veritatis odio quisquam, cum at eveniet consectetur nobis, voluptas accusamus placeat magni labore! Praesentium doloremque fugit explicabo repellendus sed voluptate hic illum est ut ab quo numquam neque, harum nesciunt consectetur quod eos animi? Quidem, soluta. Maxime animi pariatur architecto doloribus dolorum fugiat omnis quaerat dolor debitis. Tempore sed voluptatibus earum nulla dolorem incidunt cum magnam.
      <br/><br/>

      <form id="myForm" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input type="checkbox" name="agree" required />
          I agree to the terms and conditions
        </label><br/><br/>
        <button type="submit" className='sub'>Submit</button>
      </form>
      
    </div>
  );
}

export default Test;
