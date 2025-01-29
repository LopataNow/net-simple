namespace NetSimple.API.Presenter
{
    public class PaginatedPresenter<T>
    {
        public IEnumerable<T> Data { get; set; } = new List<T>();
        public int TotalCount { get; set; }
    }
}
