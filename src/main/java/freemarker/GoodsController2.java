/*
 * Copyright 2012-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package freemarker;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class GoodsController2 {

    List<Good> goods = new ArrayList();

    {
        goods.add(new Good("洗衣粉", "36", "推荐❤❤❤", 0));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("洗衣机", "3600", "推荐❤❤❤❤❤", 1));
        goods.add(new Good("手机", "1600", "推荐❤❤❤❤", 2));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
        goods.add(new Good("搓衣板", "36", "推荐❤❤", 3));
    }

    @RequestMapping(value = "/goodss", method = RequestMethod.GET)
    @ResponseBody
    public GridResult get(final Good good) {
        GridResult gridResult = new GridResult();
        gridResult.setData(goods);
        gridResult.setPages(goods.size() / 10 + 1);
        return gridResult;
    }



}
