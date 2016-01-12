package freemarker;

import java.util.List;

/**
 * Created by Administrator on 2016/1/11.
 */
public class GridResult {
    private Integer pages;
    private List data;

    public Integer getPages() {
        return pages;
    }


    public void setPages(Integer pages) {
        this.pages = pages;
    }

    public List getData() {
        return data;
    }

    public void setData(List data) {
        this.data = data;
    }
}
